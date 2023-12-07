function GetInfo() {
    const newName = document.getElementById("cityInput").value;
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" + newName + "--";

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newName + '&appid=9e4d47cd06e0eea6833746dc0183658f')
        .then(response => response.json())
        .then(data => {
            // Move the map to the new coordinates
            const newCoordinates = [data.city.coord.lon, data.city.coord.lat];
            map.flyTo({
                center: newCoordinates,
                zoom: 10, // You can adjust the zoom level as needed
                speed: 1, // Speed of the transition
            });

            //Getting the min and max values for each day
            for(let i = 0; i < 5; i++){
                document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
                //Number(1.3450001).toFixed(2); // 1.35
            }

            for(let i = 0; i < 5; i++){
                document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
            }
            //------------------------------------------------------------

            //Getting Weather Icons
            for(let i = 0; i < 5; i++){
                document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
                    data.list[i].weather[0].icon
                    +".png";
            }
            //------------------------------------------------------------
            console.log(data)


        })

        .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "San Antonio";
    GetInfo();
}


//Getting and displaying the text for the upcoming five days of the week
const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

for(let i = 0; i<5; i++){
    document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
}



