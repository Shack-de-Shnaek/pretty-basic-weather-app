<script lang="ts">
    import { unitsStore } from "../localStore";

    let tempOptions = [
        {id: 1, text: 'Celsius', unit: 'C'},
        {id: 2, text: 'Fahrenheit', unit: 'F'},
        {id: 3, text: 'Kelvin', unit: 'K'}
    ];

    let visibilityOptions = [
        {id: 1, text: 'Meters', unit: 'm'},
        {id: 2, text: 'Yards', unit: 'y'}
    ];

    let windSpeedOptions = [
        {id: 1, text: 'km/h'},
        {id: 2, text: 'mph'},
        {id: 3, text: 'm/s'},
        {id: 4, text: 'fps'},
    ];
</script>

<div class="weather-card settings-card">
    <div class="option-container">
        <form class="unit-option-form">
            <label for="select-temp-unit">Temperature Unit</label>
            <select id="select-temp-unit" class="select-unit" bind:value={$unitsStore.tempUnit}
            on:change={() => localStorage.setItem('tempUnit', $unitsStore.tempUnit)}>
                {#each tempOptions as option}
                    <option value={option.unit}>{option.text}</option>
                {/each}
            </select>
        </form>
        <hr>
    </div>
    <div class="option-container">
        <form class="unit-option-form">
            <label for="select-temp-unit">Visibility Unit</label>
            <select id="select-visibility-unit" class="select-unit" bind:value={$unitsStore.visibilityUnit}
            on:change={() => localStorage.setItem('visibilityUnit', $unitsStore.visibilityUnit)}>
                {#each visibilityOptions as option}
                    <option value={option.unit}>{option.text}</option>
                {/each}
            </select>
        </form>
        <hr>
    </div>
    <div class="option-container">
        <form class="unit-option-form">
            <label for="select-temp-unit">Wind Speed Unit</label>
            <select id="select-wind-speed-unit" class="select-unit" bind:value={$unitsStore.windSpeedUnit}
            on:change={() => localStorage.setItem('windSpeedUnit', $unitsStore.windSpeedUnit)}>
                {#each windSpeedOptions as option}
                    <option value={option.text}>{option.text}</option>
                {/each}
            </select>
        </form>
        <hr>
    </div>
</div>

<style>
    select {
        background-color: rgb(245, 245, 245);
        border: none;
        height: 2.5rem;
        border-radius: 5px;
        font-size: 1.5rem;
    }

    .settings-card {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
    }

    .option-container {
        width: 100%;
        height: 27.5%;
        font-size: 2.5rem;
    }

    .unit-option-form {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
</style>