
const fetch_weather_info_url = (lat = 28.7460861, long=77.1180225) => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
}



// making an API call in VanilaJS 
fetch(fetch_weather_info_url()).then(res => {
    res.json().then(data => {
        add_data_to_ui(data)
        console.log(data)
    }).catch(err => {
        console.error(err)
    })
}).catch(err => {
    console.error(err)
})


const getDirection = (degree) => {
    if(degree < 0 || degree > 360) {
        return "Invalid value."
    }

    if (degree >= 315 && degree <= 45) {
        return 'North'
    } else if (degree < 135) {
        return 'East'
    } else if (degree < 225) {
        return 'South'
    } else if (degree < 315) {
        return "West"
    }
}

const getBackground = (mode) => {
    switch (mode) {
        case 1:
            return "sunny_day"
        case 2:
            return "rain_day"
        case 3:
            return "cloud_day"
        
        default:
            return ""
    }
}

const add_data_to_ui = (data) => {
    const date_div = document.querySelector("#today");
    date_div.innerText = data.current_weather.time;

    const temp_div = document.querySelector("#temperature_value")
    temp_div.innerText = data.current_weather.temperature;
    const temp_div2 = document.querySelector("#temperature_value2")
    temp_div2.innerText = data.current_weather.temperature;

    const wind_div = document.querySelector("#wind_speed_value");
    wind_div.innerText = `${data.current_weather.windspeed} ${data.hourly_units.windspeed_10m}`

    const direction_div = document.querySelector("#direction_value")
    direction_div.innerText = getDirection(data.current_weather.winddirection)

    // update the image based on weather data.
    const bg_div = document.querySelector("#weather_bg");
    bg_div.classList.add(getBackground(data.current_weather.weathercode))
}


