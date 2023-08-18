const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60) * 360) +90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes/60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours/12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(setDate,1000);