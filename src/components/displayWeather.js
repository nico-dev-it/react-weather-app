import './displayWeather.css'

const DisplayWeather = (props) => {
    console.log(props)
    return (
        <div className="weatherContainer">
            <div className="locationCard">
                <p><span>{props.data.name}</span></p>
                <p><span>{props.data.sys.country}</span></p>
            </div>
            <div className="mainWeatherCard">
                <p><span>Temp</span></p>
                <p><span>H: L:</span></p>
            </div>
        </div>
    )
}

export default DisplayWeather