import { unitsStore } from "../localStore";

const getLocalStorageData = () => {
    let tempUnit: string;
    let visibilityUnit: string;
    let windSpeedUnit: string;

    const unsubscribe = unitsStore.subscribe(value => {
        tempUnit = value.tempUnit;
        visibilityUnit = value.visibilityUnit;
        windSpeedUnit = value.windSpeedUnit;
    });

    //sets the temperature unit to whatever is stored in local storage if there's a temperature unit in local storage
    if (localStorage.getItem('tempUnit')) {
        unitsStore.setTempUnit(localStorage.getItem('tempUnit'));
        console.log(`tempUnit loaded from local storage ${localStorage.getItem('tempUnit')}`);
    };
    //sets the visibility unit to whatever is stored in local storage if there's a visibility unit in local storage
    if (localStorage.getItem('visibilityUnit')) {
        unitsStore.setVisibilityUnit(localStorage.getItem('visibilityUnit'))
        console.log(`visibilityUnit loaded from local storage ${localStorage.getItem('visibilityUnit')}`);
    };
    //sets the wind speed unit to whatever is stored in local storage if there's a wind speed unit in local storage
    if (localStorage.getItem('windSpeedUnit')) {
        unitsStore.setWindSpeedUnit(localStorage.getItem('windSpeedUnit'));
        console.log(`windSpeedUnit loaded from local storage ${localStorage.getItem('windSpeedUnit')}`);
    };

    unsubscribe();
}

export default getLocalStorageData;