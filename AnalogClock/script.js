let clock_Sound = new Audio("music/tickSound.mp3");

setInterval(() => {
    date = new Date()

    hour_Time = date.getHours()
    minute_Time = date.getMinutes()
    second_Time = date.getSeconds()

    hour_Rotation = (30 * hour_Time) + (minute_Time / 2);
    minute_Rotation = (6 * minute_Time);
    second_Rotation = (6 * second_Time);

    hour.style.transform = `rotate(${hour_Rotation}deg)`
    minute.style.transform = `rotate(${minute_Rotation}deg)`
    second.style.transform = `rotate(${second_Rotation}deg)`
    
    clock_Sound.play();
}, 1000)