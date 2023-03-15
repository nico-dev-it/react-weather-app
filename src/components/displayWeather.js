import './displayWeather.css'

const DisplayWeather = () => {
    return (
        <div className="weatherContainer">
            <div className="locationCard">
                <p><span>City</span></p>
                <p><span>Country</span></p>
            </div>
            <div className="mainWeatherCard">
                <p><span>Temp</span></p>
                <p><span>H: L:</span></p>
            </div>
        </div>
    )
}

export default DisplayWeather