import { getForecast } from "./api/openweather.js";
import { createMap, getCoordinates, getAddress } from "./api/mapbox.js";

// MAIN
(async () => {
    const sanAntonioForecast = await getForecast(29.458472, -98.6791838);
    const map = createMap("map", [-98.6791838, 29.458472], 9);
})();