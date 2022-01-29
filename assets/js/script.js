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

// this function is get the current weather. the word city is a place holder only
 function getCurrentWeather(city){
console.log ("this is in the function", city)
fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
`).then((response)=>{
    console.log(response);

    response.json().then((data)=>{
    console.log(data);
}) }) 
 }
// 





})
