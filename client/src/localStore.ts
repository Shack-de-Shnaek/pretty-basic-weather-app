import { Writable, writable } from "svelte/store";

export const weatherStore: Writable<parsedWeatherData> = writable({
    weather: {
        main: '',
        description: '',
        icon: '01d'
    },
    temperature: {
        temp: 273.15,
        realfeel: 273.15
    },
    pressure: 0,
    humidity: 0,
    visibility: 0,
    wind: {
        speed: 0,
        deg: 0
    }
});

export const locationStore = writable({
    city: '',
    country: ''
});

const createUnitStore = () => {
    const { subscribe, set, update } = writable({    
        tempUnit: 'C',
        visibilityUnit: 'm',
        windSpeedUnit: 'km/h',
    });

    return {
        subscribe,
        set,
        update,
        //method that sets that temperature unit
        setTempUnit: (newValue:string) => update(self => {
            self.tempUnit = newValue;
            return self;
        }),
        //method that sets the visibility unit
        setVisibilityUnit: (newValue:string) => update(self => {
            self.visibilityUnit = newValue;
            return self;
        }),
        //method that sets the wind speed unit
        setWindSpeedUnit: (newValue:string) => update(self => {
            self.windSpeedUnit = newValue;
            return self;
        })
        //note to self about those methods above: update passes the entire store itself as an argument and not some arbitrary value
    }
}

export const unitsStore = createUnitStore();