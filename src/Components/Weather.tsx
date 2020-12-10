import React from 'react';

const Weather = (props: any) => {

    return(
        <div>
            <p>Here is the weather for {props.name}:</p>
            <p>It is currently {props.weather.description} with a temp of {props.temp.temp}°F with a high of {props.temp.temp_max}°F and a low of {props.temp.temp_min}°F.</p>
        </div>
    )
}

export default Weather;