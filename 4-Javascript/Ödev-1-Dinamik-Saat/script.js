let fullName =prompt("Lütfen Adınızı Giriniz!");
let nameEl = document.getElementById("myName");
nameEl.innerText=fullName;
let clockEl=document.getElementById("myClock");
function dynamicClock(){
    let dateNow = new Date();
    clockEl.innerText=dateNow;
}
setInterval(dynamicClock,1000);