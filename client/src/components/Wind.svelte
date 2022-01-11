<script lang="ts">
    import { onDestroy } from "svelte";
    import { fade } from "svelte/transition";
    import { weatherStore, unitsStore } from "../localStore";

    let windSpeed: number;
    let windDirection: number;

    let windSpeedUnit: string;
    
    const unsubscribeWeather = weatherStore.subscribe(value => {
        windSpeed = value.wind.speed;
        windDirection = value.wind.deg;
    });

    const unsubscribeUnits = unitsStore.subscribe(value => {
        windSpeedUnit = value.windSpeedUnit;
    });

    const calculateWindSpeed = () => {
        switch(windSpeedUnit) {
            case 'km/h':
                return Number((windSpeed*3.6).toPrecision(3));
            case 'mph':
                return Number((windSpeed*2.237).toPrecision(3));
            case 'fps':
                return Number((windSpeed*3.281).toPrecision(3));
            case 'm/s':
                return windSpeed;
            default:
                return windSpeed;
        }
    }

    let calculatedWindSpeed = 0;
    $:if (windSpeed || windSpeedUnit) {
        calculatedWindSpeed = calculateWindSpeed();
    } 

    onDestroy(() => {
        unsubscribeWeather();
        unsubscribeUnits();
    });
</script>

<div class="wind-container weather-card">
    <div class="compass-container">
        <div class="compass-background">
            <!-- <div class="compass-center-circle"></div> -->
            <div class="top">N</div>
            <div class="middle">
                <span>W</span>
                <div class="compass-center-circle"></div>
                <span>E</span>
            </div>
            <div class="bottom">S</div>
        </div>
        <img src="./icons/compass-arrow.png" alt="compass-arrow" class="compass-arrow" style="transform: rotate({windDirection}deg)">
    </div>
    <hr>
    <div class="wind-speed-container">
        {#key calculatedWindSpeed}
            <span in:fade>{calculatedWindSpeed}</span>
        {/key}
        {#key windSpeedUnit}
            <span in:fade>{windSpeedUnit}</span>
        {/key}
    </div>
</div>

<style>
    .compass-container {
        box-sizing: border-box;
        height: 85%;
        padding: 10px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .compass-background {
        position: absolute;
        box-sizing: border-box;
        height: 90%;
        aspect-ratio: 1/1;
        background-color: #506a75;
        border: 15px solid #a7b1b9;
        padding: 15px;
        font-size: 1.5rem;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .middle {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .middle > span {
        width: 1rem;
    }

    .compass-center-circle {
        display: inline-block;
        z-index: 10;
        border: 1px solid var(--background-color-secondary);
        border-radius: 50%;
        height: 1.5rem;
        width: 1.5rem;
        background-color: #a7b1b9;
    }

    .compass-arrow {
        z-index: 5;
        width: 2rem;
        height: 10rem;
        transition: transform 1s;
    }

    .wind-speed-container {
        height: 10%;
        text-align: center;
        font-size: 2.5rem;
    }
</style>