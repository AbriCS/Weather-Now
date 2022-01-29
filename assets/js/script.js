$(document).ready(function(){


//j-Query

const city=$("#city")
const apiKey="4a4cf62bb3dee91c7c75d19ef4d54dbf"
$("#searchBtn").on("click",function(event){
  event.preventDefault() 
  console.log("click")
  
  const input= city.val().trim()
  console.log(input)
  getCurrentWeather(input)
})

function getCurrentWeather(city){
  //console.log ("this is in the function", city)
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
  `
  
  fetch(url).then((res)=>{
    //console.log(res)
    if(res.ok){
      res.json().then((data)=>{
       const lon=data.coord.lon
       const lat=data.coord.lat
        displayCurrentWeather(data)
getForcast(lon, lat)
      })
    }
   
  })
   }
// 

function displayCurrentWeather(data) {
  console.log(data);
const cityname=$("#city-name").text(data.name)
const weathericon=$("<img class='picture'>").attr("src",`https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
const temp=$("#current-temp").text("Temperature:"+" " + data.main.temp)
const humidity=$("#current-humidity").text("Humidity:"+" " + data.main.humidity)
const windspeed=$("#current-wind").text("Wind Speed:"+" "+ data.wind.speed)
$("#city-date-icon").append(cityname, weathericon)
$(".current-text").append(temp, humidity, windspeed)

}
function getForcast (lon,lat){
console.log(lon, lat)
var url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`

fetch(url).then((res)=>{
  return res.json()
}).then((data)=>{
  console.log(data)
  displayForcast(data)
  const uvindex=$("#current-uv").text("UV Index:"+" "+ data.current.uvi)
  $(".current-text").append(uvindex)
})

}

function displayForcast(data){
const forcastdays=5
const forcastcontainer=$("#forcast-weather")


for (let i=0; i<forcastdays;i++){
 const forcast=`<div class="card" style="width: 18rem;">
 <img src="https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png" class="card-img-top" alt="...">

 <div class="card-body"> 
   <div class="card-text">
<p id="forecast-temp">Temperature: ${data.daily[i].temp.day}</p>
<p id="forecast-humidity">Humidity: ${data.daily[i].humidity}</p>
<p id="forecast-wind">Wind Speed: ${data.daily[i].wind_speed}</p>
</div>
 </div>
</div>
` 
forcastcontainer.append(forcast)
}

}
















})
