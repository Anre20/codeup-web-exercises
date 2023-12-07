import {keys} from "./keys.js";
import {createMap, getCoordinates, getAddress} from "./api/mapbox.js";

//MAIN
mapboxgl.accessToken = keys.mapbox;

let currentMarker = null;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-98.4916, 29.4252],
    zoom: 15,
    keyboard: false,
});

// Move map to San Antonio initially
map.flyTo({
    center: [-98.4916, 29.4260],
    zoom: 15,
    speed: 7,
});

// Event listener for search button click
document.querySelector('button').addEventListener('click', getInfo);

async function getInfo() {
    const newName = document.getElementById("cityInput").value;
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" + newName + "--";

    try {
        // Get the coordinates of the entered city
        const coordinates = await getCoordinates(newName);

        // Move the map to the new coordinates
        map.flyTo({
            center: [coordinates[0], coordinates[1]],
            zoom: 10,
            speed: 1,
        });

        if (currentMarker) {
            currentMarker.remove();
        }

        // Create a new marker at the new coordinates
        const marker = new mapboxgl.Marker()
            .setLngLat([coordinates[0], coordinates[1]])
            .addTo(map);

        // Set the current marker to the new marker
        currentMarker = marker;

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newName}&appid=9e4d47cd06e0eea6833746dc0183658f`)
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < 5; i++) {
                    const minTemperatureKelvin = data.list[i].main.temp_min;
                    const minTemperatureFahrenheit = ((minTemperatureKelvin - 273.15) * 9/5) + 32;
                    document.getElementById("day" + (i + 1) + "Min").innerHTML = "Temp: " + minTemperatureFahrenheit.toFixed(1) + "°F";
                }
                for(let i = 0; i < 5; i++){
                    document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
                        data.list[i].weather[0].icon
                        +".png";
                }
                console.log(data)
            })
            .catch(err => alert("Please enter a valid city"));
    } catch (error) {
        alert("Invalid city name or coordinates not found");
        console.error(error);
    }
}

const DefaultScreen = () => {
    document.getElementById("cityInput").defaultValue = "San Antonio";
    GetInfo();
}


//Getting and displaying the text for the upcoming five days of the week
const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
const checkDay = (day) => {
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

for(let i = 0; i < 5; i++){
    document.getElementById("day" + (i+1)).innerHTML = weekday[checkDay(i)];
}

