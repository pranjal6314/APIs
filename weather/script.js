const time=document.getElementById('time');
const date=document.getElementById('date');
const currentWeather=document.getElementById('current-weather-items');
const timezone=document.getElementById('time-zone');
const country=document.getElementById('country');
const weatherforecast=document.getElementById('weather-forecast');
const currenttemp=document.getElementById('current-temp');


const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const Api_key='a45a64af6e5b0355c7f1037299513376';

setInterval(()=>{
    const time1=new Date();
    const month=time1.getMonth();
    const date1=time1.getDate();
    const day=time1.getDay();
    const hour=time1.getHours();
    const hours12= hour>=13 ?hour %12:hour;
    const min=time1.getMinutes();
    const ampm=hour>=12?'pm':'am';
    time.innerHTML=hours12+':'+min+' '+`<span id="am-pm">${ampm}</span>`;
    date.innerHTML=days[day]+', '+date1+' '+months[month];

},1000);


getWeatherData() 
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;

        // fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily,minutely&appid=${Api_key}`).then(res => res.json()).then(data => {

       
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={${latitude}}&lon={${longitude}}&exclude=hourly,daily,minutely&appid={${Api_key}`).then(res => res.json()).then(data => {
        
        console.log(data)
        // showWeatherData(data);
        })


    })
}