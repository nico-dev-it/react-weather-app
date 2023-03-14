import './weather.css'

const Weather = () => {
    return (
        <div class="formContainer">
            <h1>Weather</h1>
            <form>
                <input type="text" name="city" placeholder="city"/>
                <input type="text" name="country" placeholder="country"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Weather