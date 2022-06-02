console.log("index.js loaded");


load('London');
function load(city){

    const url = `https://api.weatherapi.com/v1/current.json?key=c96db19cac8643199b4112544220305&q=${city}&aqi=no`;

fetch(url).then(function(response){
    return response.text();
}).then(function(data){
    let weather = JSON.parse(data);

    update(weather);
    console.log(weather);
})
}
function update(data){
    let temp = document.getElementById('temperature');
    let city = document.getElementById('city');
    let country = document.getElementById('country');
    let weather = document.getElementById('weather');

    city.innerHTML = (`${data.location.name}`);
    country.innerHTML = (`${data.location.country}`);
    weather.innerHTML = (`<img src="${data.current.condition.icon}" alt=""><br> ${data.current.condition.text}`);
    temp.innerHTML = (`${data.current.temp_c}<span>oC</span>`)
}

document.getElementById('new').addEventListener('click',function(){
    let city = document.getElementById('cityNew');
    load(city.value);
    // console.log(city.value);
    city.value= "";
})


// console.log(weather);
