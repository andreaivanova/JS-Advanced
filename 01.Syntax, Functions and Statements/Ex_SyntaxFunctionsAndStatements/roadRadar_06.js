function roadRadar(speed, area) {
    const speedArea = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }
    let status = '';
    if (speed - speedArea[area] <= 20) {
        status = 'speeding';
    } else if (speed - speedArea[area] <= 40) {
        status = 'excessive speeding';

    } else {
        status = 'reckless driving';
    }

    if (speed <= speedArea[area]) {
        console.log(`Driving ${speed} km/h in a ${speedArea[area]} zone`);
    } else {
        console.log(`The speed is ${speed - speedArea[area]} km/h faster than the allowed speed of ${speedArea[area]} - ${status}`);
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');