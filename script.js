let weather = {
    "apiKey": "1f9876230db8e315388a9e8e3d3175e1",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +"&units=metric&appid="
            + this.apiKey

        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
        
        
    },

    //To get the weather data

    displayWeather: function(data){
        const {name} = data; //city name
        const {icon, description} = data.weather[0];
        const { temp, humidity } = data.main;
        const {speed}= data.wind;
        console.log(name, icon, description, temp, humidity, speed)

    // To display on page
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + " %";
    document.querySelector(".wind").innerHTML = "Wind Speed : " + speed + " km/h";
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?weather, clouds, sky" + name +"')"
    
    },

    serach: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.serach();
})

document.querySelector(".search-bar").addEventListener("keyup", function() {
    if (event.key == "Enter"){
        weather.serach();
    }
});

weather.fetchWeather("");