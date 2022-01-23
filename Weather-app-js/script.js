let weather = {
    apiKey :"14b733c813bf8d569ac78b1e6c307e05",
    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description } = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText =  temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity +"%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h"
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x1900/?"+name+"')"
        
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

//for btn
document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
} )


//for enter key press
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
} )


weather.fetchWeather("Istanbul")