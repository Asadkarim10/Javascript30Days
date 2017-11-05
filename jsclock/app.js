
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
const now = new Date();
const second = now.getSeconds
const secondsDegree = ((second/60)*360);
secondHand.style.transform = `rotate(${secondsDegree}deg)`;

const min =  now.getMinutes();
const minsDegrees = ((mins / 60) * 360 ) + 90 ;
hourHand.style.transform = `rotate(${minsDegrees}deg)`

const hour =  now.getMinutes();
const hourDegrees = ((mins / 60) * 360 ) + 90 ;
hourHand.style.transform = `rotate(${hourDegrees}deg)`

}
setInterval(setDate,1000);