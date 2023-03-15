import './displayWeather.css'

const DisplayWeather = (props) => {
    console.log(props)
    return (
        <div className="weatherContainer">
            <div className="locationCard">
                <p><span className="mainTitle">{props.data.name}</span></p>
                <p><span>{props.data.sys.country}</span></p>
                <p>{props.data.weather[0].description}</p>
            </div>
            <div className="mainWeatherCard">
                <p><span className="mainTitle">{Math.round(props.data.main.temp)}°</span></p>
                <p><span>H: {Math.round(props.data.main.temp_max)}° L: {Math.round(props.data.main.temp_min)}°</span></p>
                <p><span>Feels like: {Math.round(props.data.main.feels_like)}°</span></p>
            </div>
        </div>
    )
}

export default DisplayWeather