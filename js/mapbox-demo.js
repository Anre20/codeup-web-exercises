import {keys} from "./keys.js";

export const getCoordinates = async (searchText) => {
    searchText = encodeURIComponent(searchText);
    const url =`https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}
//MAIN
(async () => {
    const coordinates = await getCoordinates("8700 Tereso Dr Suite 100, San Antonio, TX, 78217");
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/satellite-v9', // style URL
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 9, // starting zoom
        keyboard: false,
    })
    const marker = new mapboxgl.Marker()
        .setLngLat([-98.4916, 29.4260])
        .addTo(map);
    const popup = new mapboxgl.Popup()
        .setLngLat([-98.4916, 29.4260])
        .setHTML("<p>Codeup Rocks!</p>")
        .addTo(map);
    map.flyTo({
        center: [-98.4916, 29.4260],
        zoom: 16,
        speed: 7,
    });
})();