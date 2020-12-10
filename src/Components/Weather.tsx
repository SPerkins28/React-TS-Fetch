import React from 'react';

type WeatherProps = {
    name: string,
    temp: any,
    weather: any,

}

const Weather = ({name, temp, weather}: WeatherProps) => {

    return(
        <div>
            <p>Here is the weather for {name}:</p>
            <p>It is currently {weather.description} with a temp of {temp.temp} degrees with a high of {temp.temp_max} degrees and a low of {temp.temp_min} degrees.</p>
        </div>
    )
}

export default Weather;