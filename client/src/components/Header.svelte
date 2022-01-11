<script lang="ts">
    import { createEventDispatcher, onDestroy } from "svelte";
    import { locationStore } from "../localStore";

    export let queryError = false;
    
    let city: string;
    let country: string;

    const unsubscribe = locationStore.subscribe(value => {
        city = value.city;
        country = value.country;
    });

    const dispatch = createEventDispatcher();
    
    const emitStartQuery = ():any => {
        dispatch('command', { 
            text: 'startQuery' 
        });
    }
    
    onDestroy(() => {
        unsubscribe();
    });
</script>

<header class="header">
    <form class="location-input-form" on:submit|preventDefault={() => emitStartQuery()}>
        <span>
            <label for="city-input" class="location-input-label">City: </label>
            <input type="text" id="city-input" class="location-input-field" required bind:value={$locationStore.city}>
        </span>
        <span>
            <label for="country-input" class="location-input-label">Country Code: </label>
            <input type="text" id="country-input" class="location-input-field" bind:value={$locationStore.country}>
        </span>
        <div class="search-button-wrapper" class:visible={city != ''}>
            <input type="submit" value="Search" class="search-button">
        </div>
        {#if queryError}
        <div class="error-message">
            Could not fetch weather data
        </div>
        {/if}
    </form>
</header>

<style>
    .header {
        box-sizing: border-box;
        width: 100%;
        min-height: 5rem;
        background-color: var(--background-color-primary);
        color: var(--text-color-primary);
        padding: 0.5rem;
        line-height: 4rem;
        font-size: 3rem;
    }

    .location-input-form {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 1rem;
    }
    
    .location-input-field {
        box-sizing: border-box;
        margin: 0;
        border: 0;
        border-radius: 5px;
        font-size: 2.5rem;
        height: 3rem;
        max-width: 15rem;
    }

    #country-input {
        width: 5rem;
    }

    .search-button-wrapper {
        display: none;
        width: 100%;
        text-align: center;
    }
    
    .visible {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .search-button {
        display: inherit;
        box-sizing: border-box;
        margin: 0;
        padding: 5px;
        border: none;
        height: 90%;
        border-radius: 15px;
        font-size: 2rem;
        transition: all 0.25s;
        text-align: center;
    }

    .search-button:hover {
        box-shadow: 1px 2px 7px 4px #6d6d77;
    }

    .error-message {
        width: 100%;
        background-color: #c53030;
        border-radius: 10px;
        padding: 5px;
        text-align: center;
    }

    @media only screen and (max-width: 1000px) {
        .search-button {
            text-align: center;
            width: 40%;
        }
    }
    
    @media only screen and (max-width: 600px) {
        .header {
            font-size: 2rem;
        }

        .location-input-form {
            gap: 5px;
        }
        
        .location-input-field {
            height: 2.5rem;
            font-size: 2rem;
            max-width: 10rem;
        }

        .search-button {
            height: 3rem;
            font-size: 1.5rem;
            padding: 2px;
            width: 80%
        }
    }
</style>