<script lang="ts">
    import { onDestroy } from "svelte";
    import { fade } from "svelte/transition";
    import { weatherStore, unitsStore } from "../localStore";

    let mainTemp: number;
    let realFeel: number;

    let tempUnit: string;
    
    const unsubscribeWeather = weatherStore.subscribe(value => {
        mainTemp = value.temperature.temp;
        realFeel = value.temperature.realfeel;
    });

    const unsubscribeUnits = unitsStore.subscribe(value => {
        tempUnit = value.tempUnit;
    });
    
    const calculateTemperature = (baseTemp: number) => {
        switch(tempUnit) {
            case 'C':
                return Math.round(baseTemp - 273.15);
            case 'F':
                return Math.round((baseTemp - 273.15) * 9 / 5 + 32);
            case 'K':
                return baseTemp;
            default:
                return baseTemp;
        }
    }

    let calculatedTemp = 0;
    let calculatedRealFeel = 0;

    $:if(mainTemp || realFeel || tempUnit) {
        calculatedTemp = calculateTemperature(mainTemp);
        calculatedRealFeel = calculateTemperature(realFeel);
    }

    onDestroy(() => {
        unsubscribeWeather();
        unsubscribeUnits();
    });

</script>

<div class="primary-container weather-card">
    <div class="main-temp-container">
        <img src="./icons/{$weatherStore.weather.icon}.png" alt="weather icon" class="weather-icon">
        <span class="temp">
            {#key calculatedTemp}
                <span in:fade>{calculatedTemp}</span>
            {/key}
            {#key tempUnit}
                <span in:fade>°{tempUnit}</span>
            {/key}
        </span>
    </div>
    <hr>
    <div class="realfeel-container">
        Feels like 
        {#key calculatedRealFeel}
            <span in:fade>{calculatedRealFeel}</span>
        {/key}
        {#key tempUnit}
            <span in:fade>°{tempUnit}</span>
        {/key}
    </div>
</div>

<style>
    .main-temp-container {
        box-sizing: border-box;
        width: 100%;
        height: 60%;
        padding: 10px;
        border-top-left-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background: linear-gradient(100deg, rgba(0,208,251,1) 25%, rgba(220,228,226,1) 85%);
    }

    .weather-icon {
        height: 100%;
    }

    .temp {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        padding-top: auto;
        padding-bottom: auto;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        font-size: 6.5rem;
    }

    .realfeel-container {
        box-sizing: border-box;
        width: 100%;
        height: auto;
        padding: 1rem;
        font-size: 2rem;
        text-align: center;
    }
</style>