//fetching weather data
function place(){
    locations=inp.value
    console.log(locations);
    fetch(`http://api.weatherapi.com/v1/current.json?key=0abfc849ac024c3f87845231230304&q=${locations}&aqi=no`)
    .then(result=>result.json())
    .then(data=>displayData(data))
}



// //displaying output

function displayData(data){
    let district=data.location.name;
  let  temperature=data.current.temp_c;
  let humidity=data.current.humidity;
  let wind=data.current.wind_kph;
  let pressure=data.current.pressure_mb;
  
if(temperature>35){
    image.innerHTML=`<img id="icon" src="https://th.bing.com/th/id/R.a9a640b1f0caa639bc6166c6d6069a5b?rik=Qbrf%2fePe9Rj04w&riu=http%3a%2f%2fimages.clipartpanda.com%2fsummer-clip-art-1287157794_Clip_Art.png&ehk=WfqbgWRy7MiruG8hsjXYjTjA4UlroLVbB11HFV4GQLM%3d&risl=&pid=ImgRaw&r=0" alt="">`
}else if(temperature<35 && temperature>30 ){
    image.innerHTML=`<img id="icon" src="https://media1.giphy.com/media/UnyblOs6hGx9Mli7jq/giphy.gif" alt="">`
}else if(temperature<30){
    image.innerHTML=`<img id="icon" src="https://media.giphy.com/media/3ohhwsupwJyzktdgS4/giphy.gif" alt="">`

}

   loc.innerHTML=district;
   temp.innerHTML=temperature +`°C`;
   hum.innerHTML=humidity +`%`;
   wind.innerHTML=wind +`km/h`;
   pressure.innerHTML=pressure;
}
