import './displayWeather.css'

const DisplayWeather = (props) => {
    console.log(props)
    const sunriseUnix = props.data.sys.sunrise
    const sunrise = new Date(sunriseUnix * 1000)
    const sunsetUnix = props.data.sys.sunset
    const sunset = new Date(sunsetUnix * 1000)
    const weatherIcon = "https://openweathermap.org/img/wn/" + `${props.data.weather[0].icon}` + ".png"


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
                    <p>Currently</p>
                    <img src={weatherIcon}/>
                </div>
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
                    <p>Rain last 1h</p>
                    <p><span className="weatherData">{props.data.rain['1h']}</span></p>
                    <p>mm</p>
                </div>
                <div className="sunriseCard">
                    <p>Sunrise</p>
                    <p>{sunrise.toLocaleTimeString("en-GB", {timeStyle: 'short'})}</p>
                </div>
                <div className="sunsetCard">
                    <p>Sunset</p>
                    <p>{sunset.toLocaleTimeString("en-GB", {timeStyle: 'short'})}</p>
                </div>
            </div>
        </div>
    )
}

export default DisplayWeather