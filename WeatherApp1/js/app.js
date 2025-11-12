//alert("I am working")
 
const strBaseWeatherAPIURL = 'https://api.open-meteo.com/v1/forecast?'
const strAddWeatherAPIUrl = '&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&hourly=temperature_2m,relative_humidity_2m,precipitation,precipitation_probability,weather_code,cloud_cover,soil_temperature_0cm,wind_speed_10m,wind_speed_80m,wind_direction_10m,wind_direction_80m,wind_gusts_10m,soil_moisture_0_to_1cm,visibility,uv_index,is_day&current=temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,weather_code,cloud_cover&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch'

async function getWeatherData(strLat, strLong){
    let strWeatherAPIURL = strBaseWeatherAPIURL + `latitude=${strLat}&longitude=${strLong}` + strAddWeatherAPIUrl
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
                document.querySelector('#txtDescription').innerHTML = '<p id="txtDescription" class="fw-bold">Light Rain</p>'
            }
 
            if([61,63,65].includes(strCurrentWeatherCode)) {
                document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-rain-heavy"></i>'
                document.querySelector('#txtDescription').innerHTML = '<p id="txtDescription" class="fw-bold">Rain</p>'
            }
 
            if([95].includes(strCurrentWeatherCode)) {
                document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-lightning-rain"></i>'
                document.querySelector('#txtDescription').innerHTML = '<p id="txtDescription" class="fw-bold">Thunderstorms</p>'
            }

        //TODAY Card
        let strMinTempToday = objData.daily.temperature_2m_min[0] + '°'
        document.querySelector('#lblLow-today').innerHTML = strMinTempToday
 
        let strMaxTempToday = objData.daily.temperature_2m_max[0] + '°'
        document.querySelector('#lblHigh-today').innerHTML = strMaxTempToday
 
        let strWeatherCodeToday = objData.daily.weather_code[0]
            if([0].includes(strWeatherCodeToday)) {
                document.querySelector('#lblIcon-today').innerHTML = '<i class="bi bi-brightness-high"></i>'
                document.querySelector('#txtDescription-today').innerHTML = '<p id="txtDescription-today" class="fw-bold">Clear Skies</p>'
            }
 
            if([1,2,3].includes(strWeatherCodeToday)) {
                document.querySelector('#lblIcon-today').innerHTML = '<i class="bi bi-cloud-sun"></i>'
                document.querySelector('#txtDescription-today').innerHTML = '<p id="txtDescription-today" class="fw-bold">Partly Cloudy</p>'
            }
 
            if([51,53,55].includes(strWeatherCodeToday)) {
                document.querySelector('#lblIcon-today').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
                document.querySelector('#txtDescription-today').innerHTML = '<p id="txtDescription-today" class="fw-bold">Light Rain</p>'
            }
 
            if([61,63,65].includes(strWeatherCodeToday)) {
                document.querySelector('#lblIcon-today').innerHTML = '<i class="bi bi-cloud-rain-heavy"></i>'
                document.querySelector('#txtDescription-today').innerHTML = '<p id="txtDescription-today" class="fw-bold">Rain</p>'
            }
 
            if([95].includes(strWeatherCodeToday)) {
                document.querySelector('#lblIcon-today').innerHTML = '<i class="bi bi-cloud-lightning-rain"></i>'
                document.querySelector('#txtDescription-today').innerHTML = '<p id="txtDescription-today" class="fw-bold">Thunderstorms</p>'
            }
        
        //Tomorrow Card
        let strMinTempTomorrow = objData.daily.temperature_2m_min[1] + '°'
        document.querySelector('#lblLow-tomorrow').innerHTML = strMinTempTomorrow
 
        let strMaxTempTomorrow = objData.daily.temperature_2m_max[1] + '°'
        document.querySelector('#lblHigh-tomorrow').innerHTML = strMaxTempTomorrow
 
        let strWeatherCodeTomorrow = objData.daily.weather_code[1]
            if([0].includes(strWeatherCodeTomorrow)) {
                document.querySelector('#lblIcon-tomorrow').innerHTML = '<i class="bi bi-brightness-high"></i>'
                document.querySelector('#txtDescription-tomorrow').innerHTML = '<p id="txtDescription-tomorrow" class="fw-bold">Clear Skies</p>'
            }
 
            if([1,2,3].includes(strWeatherCodeTomorrow)) {
                document.querySelector('#lblIcon-tomorrow').innerHTML = '<i class="bi bi-cloud-sun"></i>'
                document.querySelector('#txtDescription-tomorrow').innerHTML = '<p id="txtDescription-tomorrow" class="fw-bold">Partly Cloudy</p>'
            }
 
            if([51,53,55].includes(strWeatherCodeTomorrow)) {
                document.querySelector('#lblIcon-tomorrow').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
                document.querySelector('#txtDescription-tomorrow').innerHTML = '<p id="txtDescription-tomorrow" class="fw-bold">Light Rain</p>'
            }
 
            if([61,63,65].includes(strWeatherCodeTomorrow)) {
                document.querySelector('#lblIcon-tomorrow').innerHTML = '<i class="bi bi-cloud-rain-heavy"></i>'
                document.querySelector('#txtDescription-tomorrow').innerHTML = '<p id="txtDescription-tomorrow" class="fw-bold">Rain</p>'
            }
 
            if([95].includes(strWeatherCodeTomorrow)) {
                document.querySelector('#lblIcon-tomorrow').innerHTML = '<i class="bi bi-cloud-lightning-rain"></i>'
                document.querySelector('#txtDescription-tomorrow').innerHTML = '<p id="txtDescription-tomorrow" class="fw-bold">Thunderstorms</p>'
            }
        
        //Day 3 Card
        let strMinTempDay3 = objData.daily.temperature_2m_min[2] + '°'
        document.querySelector('#lblLow-day3').innerHTML = strMinTempDay3
 
        let strMaxTempDay3 = objData.daily.temperature_2m_max[2] + '°'
        document.querySelector('#lblHigh-day3').innerHTML = strMaxTempDay3
 
        let strWeatherCodeDay3 = objData.daily.weather_code[2]
            if([0].includes(strWeatherCodeDay3)) {
                document.querySelector('#lblIcon-day3').innerHTML = '<i class="bi bi-brightness-high"></i>'
                document.querySelector('#txtDescription-day3').innerHTML = '<p id="txtDescription-day3" class="fw-bold">Clear Skies</p>'
            }
 
            if([1,2,3].includes(strWeatherCodeDay3)) {
                document.querySelector('#lblIcon-day3').innerHTML = '<i class="bi bi-cloud-sun"></i>'
                document.querySelector('#txtDescription-day3').innerHTML = '<p id="txtDescription-day3" class="fw-bold">Partly Cloudy</p>'
            }
 
            if([51,53,55].includes(strWeatherCodeDay3)) {
                document.querySelector('#lblIcon-day3').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
                document.querySelector('#txtDescription-day3').innerHTML = '<p id="txtDescription-day3" class="fw-bold">Light Rain</p>'
            }
 
            if([61,63,65].includes(strWeatherCodeDay3)) {
                document.querySelector('#lblIcon-day3').innerHTML = '<i class="bi bi-cloud-rain-heavy"></i>'
                document.querySelector('#txtDescription-day3').innerHTML = '<p id="txtDescription-day3" class="fw-bold">Rain</p>'
            }
 
            if([95].includes(strWeatherCodeDay3)) {
                document.querySelector('#lblIcon-day3').innerHTML = '<i class="bi bi-cloud-lightning-rain"></i>'
                document.querySelector('#txtDescription-day3').innerHTML = '<p id="txtDescription-day3" class="fw-bold">Thunderstorms</p>'
            }
        
        //Day 4 Card
        let strMinTempDay4 = objData.daily.temperature_2m_min[3] + '°'
        document.querySelector('#lblLow-day4').innerHTML = strMinTempDay4
 
        let strMaxTempDay4 = objData.daily.temperature_2m_max[3] + '°'
        document.querySelector('#lblHigh-day4').innerHTML = strMaxTempDay4
 
        let strWeatherCodeDay4 = objData.daily.weather_code[3]
            if([0].includes(strWeatherCodeDay4)) {
                document.querySelector('#lblIcon-day4').innerHTML = '<i class="bi bi-brightness-high"></i>'
                document.querySelector('#txtDescription-day4').innerHTML = '<p id="txtDescription-day4" class="fw-bold">Clear Skies</p>'
            }
 
            if([1,2,3].includes(strWeatherCodeDay4)) {
                document.querySelector('#lblIcon-day4').innerHTML = '<i class="bi bi-cloud-sun"></i>'
                document.querySelector('#txtDescription-day4').innerHTML = '<p id="txtDescription-day4" class="fw-bold">Partly Cloudy</p>'
            }
 
            if([51,53,55].includes(strWeatherCodeDay4)) {
                document.querySelector('#lblIcon-day4').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
                document.querySelector('#txtDescription-day4').innerHTML = '<p id="txtDescription-day4" class="fw-bold">Light Rain</p>'
            }
 
            if([61,63,65].includes(strWeatherCodeDay4)) {
                document.querySelector('#lblIcon-day4').innerHTML = '<i class="bi bi-cloud-rain-heavy"></i>'
                document.querySelector('#txtDescription-day4').innerHTML = '<p id="txtDescription-day4" class="fw-bold">Rain</p>'
            }
 
            if([95].includes(strWeatherCodeDay4)) {
                document.querySelector('#lblIcon-day4').innerHTML = '<i class="bi bi-cloud-lightning-rain"></i>'
                document.querySelector('#txtDescription-day4').innerHTML = '<p id="txtDescription-day4" class="fw-bold">Thunderstorms</p>'
            }

        //Day 5 Card
        let strMinTempDay5 = objData.daily.temperature_2m_min[4] + '°'
        document.querySelector('#lblLow-day5').innerHTML = strMinTempDay5
 
        let strMaxTempDay5 = objData.daily.temperature_2m_max[4] + '°'
        document.querySelector('#lblHigh-day5').innerHTML = strMaxTempDay5
 
        let strWeatherCodeDay5 = objData.daily.weather_code[4]
            if([0].includes(strWeatherCodeDay5)) {
                document.querySelector('#lblIcon-day5').innerHTML = '<i class="bi bi-brightness-high"></i>'
                document.querySelector('#txtDescription-day5').innerHTML = '<p id="txtDescription-day5" class="fw-bold">Clear Skies</p>'
            }
 
            if([1,2,3].includes(strWeatherCodeDay5)) {
                document.querySelector('#lblIcon-day5').innerHTML = '<i class="bi bi-cloud-sun"></i>'
                document.querySelector('#txtDescription-day5').innerHTML = '<p id="txtDescription-day5" class="fw-bold">Partly Cloudy</p>'
            }
 
            if([51,53,55].includes(strWeatherCodeDay5)) {
                document.querySelector('#lblIcon-day5').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
                document.querySelector('#txtDescription-day5').innerHTML = '<p id="txtDescription-day5" class="fw-bold">Light Rain</p>'
            }
 
            if([61,63,65].includes(strWeatherCodeDay5)) {
                document.querySelector('#lblIcon-day5').innerHTML = '<i class="bi bi-cloud-rain-heavy"></i>'
                document.querySelector('#txtDescription-day5').innerHTML = '<p id="txtDescription-day5" class="fw-bold">Rain</p>'
            }
 
            if([95].includes(strWeatherCodeDay5)) {
                document.querySelector('#lblIcon-day5').innerHTML = '<i class="bi bi-cloud-lightning-rain"></i>'
                document.querySelector('#txtDescription-day5').innerHTML = '<p id="txtDescription-day5" class="fw-bold">Thunderstorms</p>'
            }

        //Day 6 Card
        let strMinTempDay6 = objData.daily.temperature_2m_min[5] + '°'
        document.querySelector('#lblLow-day6').innerHTML = strMinTempDay6
 
        let strMaxTempDay6 = objData.daily.temperature_2m_max[5] + '°'
        document.querySelector('#lblHigh-day6').innerHTML = strMaxTempDay6
 
        let strWeatherCodeDay6 = objData.daily.weather_code[5]
            if([0].includes(strWeatherCodeDay6)) {
                document.querySelector('#lblIcon-day6').innerHTML = '<i class="bi bi-brightness-high"></i>'
                document.querySelector('#txtDescription-day6').innerHTML = '<p id="txtDescription-day6" class="fw-bold">Clear Skies</p>'
            }
 
            if([1,2,3].includes(strWeatherCodeDay6)) {
                document.querySelector('#lblIcon-day6').innerHTML = '<i class="bi bi-cloud-sun"></i>'
                document.querySelector('#txtDescription-day6').innerHTML = '<p id="txtDescription-day6" class="fw-bold">Partly Cloudy</p>'
            }
 
            if([51,53,55].includes(strWeatherCodeDay6)) {
                document.querySelector('#lblIcon-day6').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
                document.querySelector('#txtDescription-day6').innerHTML = '<p id="txtDescription-day6" class="fw-bold">Light Rain</p>'
            }
 
            if([61,63,65].includes(strWeatherCodeDay6)) {
                document.querySelector('#lblIcon-day6').innerHTML = '<i class="bi bi-cloud-rain-heavy"></i>'
                document.querySelector('#txtDescription-day6').innerHTML = '<p id="txtDescription-day6" class="fw-bold">Rain</p>'
            }
 
            if([95].includes(strWeatherCodeDay6)) {
                document.querySelector('#lblIcon-day6').innerHTML = '<i class="bi bi-cloud-lightning-rain"></i>'
                document.querySelector('#txtDescription-day6').innerHTML = '<p id="txtDescription-day6" class="fw-bold">Thunderstorms</p>'
            }

        //Day 7 Card
        let strMinTempDay7 = objData.daily.temperature_2m_min[6] + '°'
        document.querySelector('#lblLow-day7').innerHTML = strMinTempDay7
 
        let strMaxTempDay7 = objData.daily.temperature_2m_max[6] + '°'
        document.querySelector('#lblHigh-day7').innerHTML = strMaxTempDay7
 
        let strWeatherCodeDay7 = objData.daily.weather_code[6]
            if([0].includes(strWeatherCodeDay7)) {
                document.querySelector('#lblIcon-day7').innerHTML = '<i class="bi bi-brightness-high"></i>'
                document.querySelector('#txtDescription-day7').innerHTML = '<p id="txtDescription-day7" class="fw-bold">Clear Skies</p>'
            }
 
            if([1,2,3].includes(strWeatherCodeDay7)) {
                document.querySelector('#lblIcon-day7').innerHTML = '<i class="bi bi-cloud-sun"></i>'
                document.querySelector('#txtDescription-day7').innerHTML = '<p id="txtDescription-day7" class="fw-bold">Partly Cloudy</p>'
            }
 
            if([51,53,55].includes(strWeatherCodeDay7)) {
                document.querySelector('#lblIcon-day7').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
                document.querySelector('#txtDescription-day7').innerHTML = '<p id="txtDescription-day7" class="fw-bold">Light Rain</p>'
            }
 
            if([61,63,65].includes(strWeatherCodeDay7)) {
                document.querySelector('#lblIcon-day7').innerHTML = '<i class="bi bi-cloud-rain-heavy"></i>'
                document.querySelector('#txtDescription-day7').innerHTML = '<p id="txtDescription-day7" class="fw-bold">Rain</p>'
            }
 
            if([95].includes(strWeatherCodeDay7)) {
                document.querySelector('#lblIcon-day7').innerHTML = '<i class="bi bi-cloud-lightning-rain"></i>'
                document.querySelector('#txtDescription-day7').innerHTML = '<p id="txtDescription-day7" class="fw-bold">Thunderstorms</p>'
            }

        let strHumidity = objData.current.relative_humidity_2m + '% Humidity'
        document.querySelector('#txtHumidityPct').innerHTML = strHumidity

        let strWindSpeed = objData.current.wind_speed_10m + 'mph'
        document.querySelector('#txtWindMPH').innerHTML = strWindSpeed

        let strWindGusts = objData.current.wind_gusts_10m + 'mph'
        document.querySelector('#txtWindGust').innerHTML = strWindGusts

        let strWindDirection = objData.current.wind_direction_10m + '°'
        document.querySelector('#txtDirection').innerHTML = strWindDirection
    }
}
 
// query selector to call get Weather on chagne
document.querySelector('#FavCourses').addEventListener('change', function(){
    if(document.querySelector('#FavCourses').value != 'None'){
        let strLat = document.querySelector('#FavCourses').options[document.querySelector('#FavCourses').selectedIndex].dataset.lat
        let strLong = document.querySelector('#FavCourses').options[document.querySelector('#FavCourses').selectedIndex].dataset.long
        getWeatherData(strLat, strLong)
    }

})
 
// Create, Read, Update, Delete
// CREATE = POST
// READ = GET
// UPDATE = PUT(PATCH)
// DELETE = DELETE