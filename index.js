var url = 'api.openweathermap.org/data/2.5/weather?q={';
const apikey = '}&appid=9792f6c0368ca4a2fcb787b7e9f9b922';
let requested_city;

var xhttp = new XMLHttpRequest();

function cityRequest(cityName){
    requested_city = cityName;
};

console.log("Hello");

xhttp.onreadystatechange = function(){
    if(this.readyState == 2 && this.status == 200){
        let city1 = document.getElementById("city1");
        city1.innerHTML = this.response;
    }
};

xhttp.open("GET", url+requested_city+apikey, true);
xhttp.send();