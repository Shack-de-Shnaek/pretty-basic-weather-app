<script lang="ts">
	//components
	import Header from './components/Header.svelte';
	import Primary from	'./components/Primary.svelte';	
	import Secondary from './components/Secondary.svelte';
	import Wind from './components/Wind.svelte';
	import Settings from './components/Settings.svelte';
	//services
	import queryWeatherData from './services/queryWeatherData';
	import getLocalStorageData from './services/getLocalStorageData';
	//store
	import { locationStore } from './localStore';
	//built in svelte stuff
	import { onMount } from 'svelte';

	let city: string;
	let country: string;
	
	locationStore.subscribe(value => {
		city = value.city;
		country = value.country;
	})

	let data;
	//command that executes when an event from the header is dispatched
	//that command tells the app to query the api for weather data 
	const handleQueryCommand = () => {
		(async () => {
			data = await queryWeatherData(city, country);
		})();
	}
	//yoinks data from local storage if there is any when the app loads
	onMount(() => {
		getLocalStorageData();
	});
</script>

<main>
	<Header on:command={() => handleQueryCommand()} queryError={(data == 'could not fetch weather data')}/>
	<div class="main-container">
		<Primary />
		<Secondary />
		<Wind />
		<Settings />
	</div>
</main>

<style>
	.main-container {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		padding: 0.25rem;
		display: grid;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(37.5rem, 1fr));
	}

	@media only screen and (max-width: 1000px) {
		.main-container {
			grid-template-columns: 1fr;
		}
	}
</style>