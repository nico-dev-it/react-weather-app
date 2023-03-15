import './displayWeather.css'

const DisplayWeather = (props) => {
    console.log(props)
    const sunriseUnix = props.data.sys.sunrise
    const sunrise = new Date(sunriseUnix * 1000)

    return (
        <div>
            <div className="weatherContainer">
                <div className="locationCard">
                    <p><span className="mainTitle">{props.data.name}</span></p>
                    <p><span>{props.data.sys.country}</span></p>
                    <p>{props.data.weather[0].description}</p>
                </div>
                <div className="mainWeatherCard">
                    <p><span className="mainTitle">{Math.round(props.data.main.temp)}°</span></p>
                    <p>
                        <span>H: {Math.round(props.data.main.temp_max)}° L: {Math.round(props.data.main.temp_min)}°</span>
                    </p>
                    <p><span>Feels like: {Math.round(props.data.main.feels_like)}°</span></p>
                </div>
            </div>
            <div className="detailedWeatherData">
                <div className="otherWeatherCard">
                    <p>Wind</p>
                    <p><span class="weatherData">{Math.round(props.data.wind.speed)}</span></p>
                    <p>m/s</p>
                </div>
                <div className="otherWeatherCard">
                    <p>Humidity</p>
                    <p><span className="weatherData">{props.data.main.humidity}</span></p>
                    <p>%</p>
                </div>
                <div className="otherWeatherCard">
                    <p>Visibility</p>
                    <p><span className="weatherData">{Math.round(props.data.visibility) / 1000}</span></p>
                    <p>km</p>
                </div>
                <div className="otherWeatherCard">
                    <p>Sunrise</p>
                    <p>{sunrise.toLocaleTimeString("en-GB", {timeStyle: 'short'})}</p>
                </div>
                <div className="otherWeatherCard">
                    <p>Sunset</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default DisplayWeather