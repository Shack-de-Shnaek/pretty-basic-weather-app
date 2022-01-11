<script lang="ts">
    import { onDestroy } from "svelte";
    import { fade } from "svelte/transition";
    import { weatherStore, unitsStore } from "../localStore";

    let humidity: number;
    let pressure: number;
    let visibility: number;

    let visibilityUnit: string;
    
    const unsubscribeWeather = weatherStore.subscribe(value => {
        humidity = value.humidity;
        pressure = value.pressure;
        visibility = value.visibility;
    });

    const unsubscribeUnits = unitsStore.subscribe(value => {
        visibilityUnit = value.visibilityUnit;
    });

    let calculatedVisibility = 0;

    const calculateVisibility = () => {
        switch(visibilityUnit) {
            case 'y':
                return Math.round(visibility*1.094);
            case 'm':
                return visibility;
            default:
                return visibility;
        }
    }

    $:if(visibility || visibilityUnit) {
        calculatedVisibility = calculateVisibility();
    }

    onDestroy(() => {
        unsubscribeWeather();
        unsubscribeUnits();
    });

</script>

<div class="secondary-container weather-card">
    <div class="weather-property-container">
        <div class="weather-property-weather">
            <img src="./icons/humidity.png" alt="humidity-icon">
            <span>Humidity: 
                {#key humidity}
                    <span in:fade>{humidity}</span>
                {/key}
            %</span>
        </div>
        <div class="weather-property-weather">
            <img src="./icons/gauge.png" alt="pressure-icon">
            <span>Pressure
                {#key pressure}
                    <span in:fade>{pressure}</span>
                {/key}
            hPa</span>
        </div>
        <div class="weather-property-weather">
            <img src="./icons/visibility.png" alt="visibility-icon">
            {#key calculatedVisibility}
                <span in:fade>{calculatedVisibility}</span>
            {/key}  
            {#key visibilityUnit}
                <span in:fade>{visibilityUnit}</span>
            {/key}  
        </div>
    </div>
</div>

<style>
    .weather-property-container {
        /* min-height: 15rem; */
        /* color: var(--text-color-blue); */
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
    }

    .weather-property-weather {
        box-sizing: border-box;
        padding: 5px;
        height: 30%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 1.5rem;
    }

    span {
        font-size: 3rem;
    }

    img {
        height: 100%;
        filter: invert(45%) sepia(100%) hue-rotate(150deg) saturate(2.75);
    }

</style>