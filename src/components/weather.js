import './weather.css'
import {useState} from "react";

const Weather = () => {

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
            <h1>Weather</h1>
            <form>
                <input type="text" name="city" placeholder="city" onChange={event => handleChange(event)}/>
                <input type="text" name="country" placeholder="country" onChange={event => handleChange(event)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Weather