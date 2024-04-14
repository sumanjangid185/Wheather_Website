

const apiKey = "f0aad8c49801f4cadfdb3e82986bb7b4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const  searchbox=document.querySelector(".search input");
const  searchbtn=document.querySelector(".search button");
const  weatherIcon=document.querySelector(".wheather-icon");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl+city}&appid=${apiKey}`);
     
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".wheather").style.display="none";
    }
    else{


    var data = await response.json();
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
// weather image update krna

//    if(data.weather[0].main=="clouds"){
//         weatherIcon.src="images/clouds.png";
//     }
//     else if(data.weather[0].main=="clear"){
//         weatherIcon.src="images/clear.png";
//     }
//     else if(data.weather[0].main=="Rain"){
//         weatherIcon.src="images/rain.png";
//     }
//     else if(data.weather[0].main=="Drizzle"){
//         weatherIcon.src="images/drizzle.png";
//     }
//     else if(data.weather[0].main=="Mist"){
//         weatherIcon.src="images/mist.png";
//     } 

    if (data.weather[0].main.toLowerCase() === "clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main.toLowerCase() === "clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main.toLowerCase() === "rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main.toLowerCase() === "drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main.toLowerCase() === "mist") {
        weatherIcon.src = "images/mist.png";
    }
    
    document.querySelector(".wheather").style.display="block";
    document.querySelector(".error").style.display="none";
}
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})

