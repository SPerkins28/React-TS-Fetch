import React, {Component} from 'react';
import Weather from './Weather';

type LocationState = {
    latitude: number,
    longitude: number,
    weather: any,
    weatherDisc: any,
    weatherTemp: number,
};

class Location extends Component<{}, LocationState> {
    constructor(props: any){
        super(props)
        this.state = {
                latitude: 0,
                longitude: 0,
                weather: {},
                weatherDisc: {},
                weatherTemp: 0,
        }
        // this.success = this.success.bind(this) //! <---- WHAT THE HECK IS THIS AND WHY DOES IT WORK!?
    }
    
    success = (pos: any) => { //! Arrow function automatically binds to class
        let crd = pos.coords;
        const lat: number  = crd.latitude;
        const long: number = crd.longitude;
        let API_KEY = '2ee7b7728b200429b97f90ff1aa4f70b';

        this.setState({
                latitude: lat,
                longitude: long,
        });

        console.log(this.state.latitude, this.state.longitude)

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=${API_KEY}`)
            .then(res => res.json())
            .then(result => {
            this.setState({
                weather: result,
                weatherDisc: result.weather[0],
                weatherTemp: result.main
            });
        });
    }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success);
    }

    render(){
        return(
            <div>
                <h1>Yo, Dawg! You are here:</h1>
                <h3>{this.state.latitude}</h3>
                <h3>{this.state.longitude}</h3>
                <Weather
                weather={this.state.weatherDisc}
                name={this.state.weather.name}
                temp={this.state.weatherTemp}
                />
            </div>
        )
    }
}

export default Location;