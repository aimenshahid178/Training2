const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apikey = '&mode=html&appid=9792f6c0368ca4a2fcb787b7e9f9b922';
let requested_city;
let randomcity;

setInterval(function(){
    if(requested_city == undefined){
        for(let i = 0; i<4; i++){
            randomcity = randomCity();
            xhttp.open("GET", url+randomcity+apikey, true);
            xhttp.send();
            city = document.getElementById(i);
            $(city).load(url+randomcity+apikey);
        }
    }
 }, 5000);

var container = document.querySelector(".wrapper");

var xhttp = new XMLHttpRequest();

function cityRequest(cityName){
    requested_city = cityName;
    xhttp.open("GET", url+requested_city+apikey, true);
    xhttp.send();
};


xhttp.onreadystatechange = function(){
    if(this.readyState == 2 && this.status == 200){
        if(requested_city != undefined){
            city1 = document.getElementById("city1");
            city1.setAttribute("style", "background-color: floralwhite");
            $(city1).load(url+requested_city+apikey);
            for(let i = 0; i<4; i++){
                document.getElementById(i).remove();
            }
            
        }        
    }
};

function randomCity(){
    let min=0; 
    let max=11;  
    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    let cityList = ['London', 'Paris', 'Tokyo', 'Vienna', 'Boston', "Lahore", "Delhi", "Beijing", "Seoul", "Venice", "Rome", "Cairo"];
    return cityList[random];
};

function displayAll(){
    requested_city = undefined;
    randomcity = randomCity();
    console.log(randomcity);
    city1 = document.getElementById("city1");
    city1.setAttribute("style", "background-color: floralwhite");
    $(city1).load(url+randomcity+apikey);
    for(let i = 0; i<4; i++){
        let div_id = i;
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", div_id);
        newDiv.setAttribute("class", "data");
        newDiv.setAttribute("style", "background-color: floralwhite");
        container.appendChild(newDiv);
        randomcity = randomCity();
        xhttp.open("GET", url+randomcity+apikey, true);
        xhttp.send();
        city = document.getElementById(i);
        $(city).load(url+randomcity+apikey);
    }
};




