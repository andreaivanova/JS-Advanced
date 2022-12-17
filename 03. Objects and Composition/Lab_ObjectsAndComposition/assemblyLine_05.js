
//creating the library (dictionary with different methods)
function createAssemblyLine() {
    return {
        hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = () => {
                if (obj.temp < obj.tempSettings) {
                    obj.temp++;
                } else if (obj.temp > obj.tempSettings) {
                    obj.temp--;
                }
            }

        },

        hasAudio(obj) {
            obj.currentTrack = {
                name: null,
                artist: null,

            }
            obj.nowPlaying = () => {
                if (obj.currentTrack.name && obj.currentTrack.artist) {
                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
                }
            }
        },

        hasParktronic(obj) {
            obj.checkDistance = (n) => {
                if (n < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (n >= 0.1 && n < 0.25) {
                    console.log("Beep! Beep!");
                } else if (n >= 0.25 && n < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log('');
                }
            }
        }

    }



}
//*********************************************** */
// invoking the library and saving it into a constant variable
const assemblyLine = createAssemblyLine();

//initial object
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
//adding the functionality to the object by 
//invoking the library with one of its keys(methods) onto our initial object

//if we didnt have library and hasCLima was a function,
// the object's functionality addition would be:
// hasClima(obj);
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);


assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);