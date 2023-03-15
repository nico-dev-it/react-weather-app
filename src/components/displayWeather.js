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
                <p><span>{props.data.main.temp}</span></p>
                <p><span>H:{props.data.main.temp_max} L:{props.data.main.temp_min}</span></p>
            </div>
        </div>
    )
}

export default DisplayWeather