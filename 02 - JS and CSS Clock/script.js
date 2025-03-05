// Function to update time. (we should run it once per second.)
function checkTime() {
    now = new Date();
    hour = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds();

    const hourHand = document.querySelector(".hour-hand");
    const hourDegrees = hour * (360 / 24) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
    const minuteHand = document.querySelector(".min-hand");
    const minuteDegrees = minute * (360 / 60) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    
    const secondHand = document.querySelector(".second-hand");
    const secondDegrees = second * (360 / 60) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`

}


setInterval(checkTime, 1000);