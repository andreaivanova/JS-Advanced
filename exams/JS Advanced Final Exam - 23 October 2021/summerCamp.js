class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
        this.conditions = ['child', 'student', 'collegian'];
        this.participants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.conditions.includes(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.participants.includes(name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })
        this.participants.push(name);
        return `The ${name} was successfully registered.`;


    }

    unregisterParticipant(name) {
        if (!this.participants.includes(name)) {

            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let index = this.participants.indexOf(name);
        this.listOfParticipants.splice(index, 1);
        this.participants.splice(index, 1);
        return `The ${name} removed successfully.`





    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (!this.participants.includes(participant1)) {
            throw new Error('Invalid entered name/s.');
        }
        //console.log(participant2);
        if (participant2 !== undefined) {

            if (!this.participants.includes(participant2)) {
                throw new Error('Invalid entered name/s.');
            }
        }
        if (typeOfGame === 'WaterBalloonFights') {

            let index1 = this.participants.indexOf(participant1);
            let index2 = this.participants.indexOf(participant2);

            if (this.listOfParticipants[index1].condition !== this.listOfParticipants[index2].condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (this.listOfParticipants[index1].power > this.listOfParticipants[index2].power) {
                this.listOfParticipants[index1].wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`

            } else if (this.listOfParticipants[index1].power < this.listOfParticipants[index2].power) {
                this.listOfParticipants[index2].wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`

            } else {
                return 'There is no winner.'
            }
        } else {
            let index1 = this.participants.indexOf(participant1);
            this.listOfParticipants[index1].power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`

        }





    }


    toString(){
        let output=`${this.organizer} will take ${this.participants.length} participants on camping to ${this.location}`
        this.listOfParticipants.sort((a,b)=>b.wins-a.wins);
        this.listOfParticipants.forEach(x=>
            output+=`\n${x.name} - ${x.condition} - ${x.power} - ${x.wins}`
            )

            return output;
    }

}


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));



//const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
//console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
//console.log(summerCamp.unregisterParticipant("Petar"));
//console.log(summerCamp.unregisterParticipant("Petar Petarson"));

/*
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));

console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
*/

/*
 const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
 console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
 console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
 //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
 console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
 console.log(summerCamp.toString());

*/