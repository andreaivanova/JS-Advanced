function carFactory(obj) {
    if (obj['power'] <= 90) {
        obj['engine'] = {
            power: 90,
            volume: 1800
        }

    } else if (obj['power'] <= 120) {
        obj['engine'] = {
            power: 120,
            volume: 2400
        }
    } else {
        obj['engine'] = {
            power: 200,
            volume: 3500
        }
    }

    delete obj['power'];

    const type = obj['carriage'];
    obj['carriage'] = {

        type,
        color: obj['color'],

    }
    delete obj['color'];

    if (obj['wheelsize'] % 2 === 0) {
        obj['wheelsize']--;
    }

    obj['wheels'] = [obj['wheelsize'], obj['wheelsize'], obj['wheelsize'], obj['wheelsize']]
    delete obj['wheelsize']
return obj;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);