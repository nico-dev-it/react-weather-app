import './weather.css'
import {useState} from "react";
import DisplayWeather from "./displayWeather";

const Weather = () => {
    const ApiKey = "6c4e5054f38eb57a9893beaa278e8ec8"

    const [form, setForm] = useState({city: "", country: ""})

    const [weather, setWeather] = useState([])

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name == "city") {
            setForm({...form, city: value})
        }
        if (name == "country") {
            setForm({...form, country: value})
        }
    }

    async function weatherData(event) {
        event.preventDefault()
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${ApiKey}`)
            .then((response) => response.json())
            .then((data) => data)
        setWeather(
            {
                data: data
            }
        )
    }

    return (
        <div className="formContainer">
            <h1>WEATHER</h1>
            <form>
                <input type="text" name="city" placeholder="city" onChange={event => handleChange(event)}/>
                <input type="text" name="country" placeholder="country" onChange={event => handleChange(event)}/>
                <button type="submit" onClick={event => weatherData(event)}>Submit</button>
            </form>
            {
                weather.data != undefined ?
                    <div>
                        <DisplayWeather data={weather.data}/>
                    </div>
                    : null
            }

        </div>
    )
}

export default Weather