var url = "https://samples.openweathermap.org/data/2.5/weather?q=London&mode=html&appid=b6907d289e10d714a6e88b30761fae22";

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState == 2 && this.status == 200){
        let city1 = document.getElementById("city1");
        city1.innerHTML = this.response;
    }
}

xhttp.open("GET", url, true);
xhttp.send();