//alert("I am working")

const strCookeville = 'https://api.open-meteo.com/v1/forecast?latitude=36.1693184&longitude=-85.508096&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&hourly=temperature_2m,relative_humidity_2m,precipitation,precipitation_probability,weather_code,cloud_cover,soil_temperature_0cm,wind_speed_10m,wind_speed_80m,wind_direction_10m,wind_direction_80m,wind_gusts_10m,soil_moisture_0_to_1cm,visibility,uv_index,is_day&current=temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,weather_code,cloud_cover&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch'
const strWhitePlains = 'https://api.open-meteo.com/v1/forecast?latitude=36.1803&longitude=-85.45&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_hours,precipitation_probability_max&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation_probability,precipitation,weather_code,cloud_cover,visibility,wind_speed_10m,wind_speed_80m,soil_moisture_1_to_3cm,soil_moisture_0_to_1cm,uv_index,uv_index_clear_sky,is_day&current=temperature_2m,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,weather_code,cloud_cover&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&forecast_hours=12'
const strSouthernHills = 'https://api.open-meteo.com/v1/forecast?latitude=36.1537&longitude=-85.6436&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_hours,precipitation_probability_max&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation_probability,precipitation,weather_code,cloud_cover,visibility,wind_speed_10m,wind_speed_80m,soil_moisture_1_to_3cm,soil_moisture_0_to_1cm,uv_index,uv_index_clear_sky,is_day&current=temperature_2m,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,weather_code,cloud_cover&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&forecast_hours=12'
const BearTrace = 'https://api.open-meteo.com/v1/forecast?latitude=35.949&longitude=-85.0269&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_hours,precipitation_probability_max&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation_probability,precipitation,weather_code,cloud_cover,visibility,wind_speed_10m,wind_speed_80m,soil_moisture_1_to_3cm,soil_moisture_0_to_1cm,uv_index,uv_index_clear_sky,is_day&current=temperature_2m,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,weather_code,cloud_cover&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&forecast_hours=12'
const Sparta = 'https://api.open-meteo.com/v1/forecast?latitude=35.9259&longitude=-85.4641&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_hours,precipitation_probability_max&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation_probability,precipitation,weather_code,cloud_cover,visibility,wind_speed_10m,wind_speed_80m,soil_moisture_1_to_3cm,soil_moisture_0_to_1cm,uv_index,uv_index_clear_sky,is_day&current=temperature_2m,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,weather_code,cloud_cover&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&forecast_hours=12'

getWeatherData();
async function getWeatherData(){
    const objResponse = await fetch(strCookeville,
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

document.querySelector      

// Create, Read, Update, Delete
// CREATE = POST
// READ = GET
// UPDATE = PUT(PATCH)
// DELETE = DELETE