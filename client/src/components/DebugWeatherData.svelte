<script lang="ts">
    import { weatherStore } from '../localStore';
    export let data;
</script>

<main>
    {#if data}
		<p>{$weatherStore.weather.main} {$weatherStore.weather.description} {$weatherStore.weather.icon}</p>
		<p>main: {$weatherStore.temperature.temp} realfeel: {$weatherStore.temperature.realfeel}</p>
		<p>humidity: {$weatherStore.humidity}</p>
		<p>pressure: {$weatherStore.pressure}</p>
		<p>visibility: {$weatherStore.visibility}</p>
		<p>wind direction: {$weatherStore.wind.deg} wind speed: {$weatherStore.wind.speed}</p>
	{/if}
</main>