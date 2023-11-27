import {keys} from "./keys.js";

const getCoordinates = async (searchText) => {
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
    const coordinates = await getCoordinates("17415 US-281 N, San Antonio, TX");
    console.log(getCoordinates())
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/satellite-v9', // style URL
        center: [-98.47132775969493, 29.60267058688001], // starting position [lng, lat]
        zoom: 1, // starting zoom
        keyboard: false,
    })
    const marker = new mapboxgl.Marker()
        .setLngLat([-98.47132775969493, 29.60267058688001])
        .addTo(map);
    const popup = new mapboxgl.Popup()
        // .setLngLat([-98.47132775969493, 29.60267058688001])
        .setHTML("<p>Red Lobster</p>")
        // .addTo(map);
    marker.setPopup(popup);

    const marker2 = new mapboxgl.Marker()
        .setLngLat([-75.1591865355112, 39.93341983377584])
        .addTo(map);
    const popup2 = new mapboxgl.Popup()
        // .setLngLat([-75.1591865355112, 39.93341983377584])
        .setHTML("<p>Pat's King of Steaks</p>")
    // .addTo(map);
    marker2.setPopup(popup2);

    const marker3 = new mapboxgl.Marker()
        .setLngLat([-89.03002467501067, 30.39796243201126])
        .addTo(map);
    const popup3 = new mapboxgl.Popup()
        // .setLngLat([-89.03002467501067, 30.39796243201126])
        .setHTML("<p>Checkers</p>")
    // .addTo(map);
    marker3.setPopup(popup3);

    map.flyTo({
        center: [-98.47132775969493, 29.60267058688001],
        zoom: 20,
        speed: 5,
    });
})();