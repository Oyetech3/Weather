const apikey = 'e1a8da22a1f37e9d2828d44ab2e4bd89'
const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apikey}&q=`

const inputval = document.getElementById("inp")
const btn = document.getElementById("btn")
const weather = document.getElementById("im")

async function fetchapi(city) {
    let myapi = await fetch(apiurl + city)
    let data = await myapi.json()
    

    if(myapi.status == 404) {
        document.getElementById("read").innerHTML = "0°C"
        document.getElementById("city").innerHTML = "City Not Found"
        document.getElementById("humidity").innerHTML =  "0%"
        document.getElementById("windy").innerHTML = "0km/h"

        document.getElementById("pp").style.display = "block"
    }
    else {
    document.getElementById("read").innerHTML = Math.round(data.main.temp ) + "°C"
    document.getElementById("city").innerHTML = data.name
    document.getElementById("humidity").innerHTML = data.main.humidity + "%"
    document.getElementById("windy").innerHTML = data.wind.speed + "km/h"

    document.getElementById("pp").style.display = "none"
    }

    if(data.weather[0].main == "Clouds") {
        weather.src = "clouds.png"
    }
    else if(data.weather[0].main == "Rain") {
        weather.src == "rain.png"
    }
    else if(data.weather[0].main == "Snow") {
        weather.src = "snow.png"
    }
    else if(data.weather[0].main == "Mist") {
        weather.src = "mist.png"
    }
    else if (data.weather[0].main == "Humidity") {
        weather.src = "humidity.png"
    }
    else if(data.weather[0].main == "Haze") {
        weather.src = "drizzle.png"
    }
    else if(data.weather[0].main == "Clear") {
        weather.src = "clear.png"
    }

}

btn.addEventListener("click", () => {
    fetchapi(inputval.value)
})
