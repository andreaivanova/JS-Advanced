function solve(steps, metersPerStep, kmPerHour) {
    const mPerSec = kmPerHour / 3.6;
    const totalMeters = steps * metersPerStep;
    const secondsDelay = Math.floor(totalMeters / 500) * 60;
    const time = totalMeters / mPerSec + secondsDelay;
    const hours = Math.floor(time / 3600);
    const min = Math.floor(time % 3600 / 60) ;
    const sec = Math.round(time % 3600 % 60);


    console.log((hours < 10 ? `0${hours}` : `${hours}`) + ':' + (min < 10 ? `0${min}` : min) + ':' + (sec < 10 ? `0${sec}` : sec));







    //https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript



}

solve(10000, 0.60, 5);
console.log(`----`);
solve(15000, 0.60, 5);
console.log(`----`);
solve(4000, 0.60, 5);
console.log(`----`);
solve(2564, 0.70, 5.5);