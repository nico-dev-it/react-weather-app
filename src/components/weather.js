import './weather.css'
import {useState} from "react";
import DisplayWeather from "./displayWeather";

const Weather = () => {
    const ApiKey = "6c4e5054f38eb57a9893beaa278e8ec8"
    
    const [form, setForm] = useState({city: "", country:""})

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name == "city") {
            setForm({...form, city: value})
        }
        if (name == "country") {
            setForm({...form, country: value})
        }
        console.log(form.city)
    }

    return (
        <div class="formContainer">
            <h1>WEATHER</h1>
            <form>
                <input type="text" name="city" placeholder="city" onChange={event => handleChange(event)}/>
                <input type="text" name="country" placeholder="country" onChange={event => handleChange(event)}/>
                <button type="submit">Submit</button>
            </form>
            <DisplayWeather />
        </div>
    )
}

export default Weather