//alert("I am working")

const strWeatherAPIURL = 'https://api.open-meteo.com/v1/forecast?latitude=36.1693184&longitude=-85.508096&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&hourly=temperature_2m,relative_humidity_2m,precipitation,precipitation_probability,weather_code,cloud_cover,soil_temperature_0cm,wind_speed_10m,wind_speed_80m,wind_direction_10m,wind_direction_80m,wind_gusts_10m,soil_moisture_0_to_1cm,visibility,uv_index,is_day&current=temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,weather_code,cloud_cover&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch'
getWeatherData();
async function getWeatherData(){
    const objResponse = await fetch(strWeatherAPIURL,
                           {
                            method:'GET',
                            headers: {
                                'Content-Type':'application/json'
                            }
                            }
                        )
    if(!objResponse.ok){
        alert('Error getting data')
    } else {
        const objData = await objResponse.json()
        document.querySelector('#lblCurrentTemp').innerHTML = objData.current.temperature_2m + '°'

        let strMinTemp = objData.daily.temperature_2m_min[0] + '°'
        document.querySelector('#lblLow').innerHTML = strMinTemp

        let strMaxTemp = objData.daily.temperature_2m_max[0] + '°'
        document.querySelector('#lblHigh').innerHTML = strMaxTemp

        let strCurrentWeatherCode = objData.current.weather_code
            if([0].includes(strCurrentWeatherCode)) {
                document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-brightness-high"></i>'
                document.querySelector('#txtDescription').innerHTML = '<p id="txtDescription" class="fw-bold">Clear Skies</p>'
            }

            if([1,2,3].includes(strCurrentWeatherCode)) {
                document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-sun"></i>'
                document.querySelector('#txtDescription').innerHTML = '<p id="txtDescription" class="fw-bold">Partly Cloudy</p>'
            }

            if([51,53,55].includes(strCurrentWeatherCode)) {
                document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
                document.querySelector('#txtDescription').innerHTML = '<p id="txtDescription" class="fw-bold">Drizzle</p>'
            }

            if([61,63,65].includes(strCurrentWeatherCode)) {
                document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-rain-heavy"></i>'
                document.querySelector('#txtDescription').innerHTML = '<p id="txtDescription" class="fw-bold">Rain</p>'
            }

            if([95].includes(strCurrentWeatherCode)) {
                document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-lightning-rain"></i>'
                document.querySelector('#txtDescription').innerHTML = '<p id="txtDescription" class="fw-bold">Thunderstorms</p>'
            }
    }
}

// Create, Read, Update, Delete
// CREATE = POST
// READ = GET
// UPDATE = PUT(PATCH)
// DELETE = DELETE