const Weather = () => {
    return (
        <div class="formContainer">
            <form>
                <input type="text" name="city" placeholder="city"/>
                <input type="text" name="country" placeholder="country"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Weather