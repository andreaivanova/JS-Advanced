class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        } else {
            return `${peak} has already been added to your goals`
        }
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.goals.hasOwnProperty(peak) && this.resources <= 0) {
            throw new Error(`You don't have enough resources to start the hike`);
        }

        let diff = this.resources - time * 10;
        if (diff < 0) {
            return `You don't have enough resources to complete the hike`;
        } else {

            //Divide the amount remaining by the total amount. Multiply the result by 100 to find the remaining percentage
            let percent = (diff / this.resources) * 100;
            this.resources -= time * 10;
            this.listOfHikes.push({ peak, time, difficultyLevel });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }


    }

    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }
        
        
        if (criteria === 'hard' || criteria === 'easy') {
            let output = [];

            for (let el of this.listOfHikes) {
                let values = Object.values(el);
                let entries = Object.entries(el);
                if (values[2] === criteria) {
                    output.push(entries);
                }
            }
            if (output.length === 0){
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            //  console.log(output);
            output.sort((a, b) => a[1][1] - b[1][1]);
            // console.log('----');
            // console.log(output);
            let best = output.shift();
       // console.log(best);
             return `${this.username}'s best ${criteria} hike is ${best[0][1]} peak, for ${best[1][1]} hours`
        }

        if (criteria === 'all'){
            let output = `All hiking records:`;
            for (let el of this.listOfHikes) {
                output+=`\n${this.username} hiked ${el.peak} for ${el.time} hours`
            }
            return output;
        }
    }

}
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));


// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
//// console.log(user.hike('Everest', 12, 'hard'));


// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));



// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));


// const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 1, 'easy');
// //console.log(user.showRecord('easy'));
// user.addGoal('Rui', 1706);
// user.addGoal('Vihren', 1706);
// user.hike('Vihren', 2, 'easy');
// user.hike('Rui', 1, 'easy');
// user.showRecord('easy')

// const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 3, 'hard');
// //console.log(user.showRecord('easy'));
// user.addGoal('Vihren', 2914);
// user.hike('Vihren', 2, 'hard');
// //console.log(user.showRecord('hard'));
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));

// const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 8, 'hard');
// console.log(user.showRecord('easy'));
// user.addGoal('Vihren', 2914);
// user.hike('Vihren', 4, 'hard');
// console.log(user.showRecord('hard'));
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));
const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.hike('Rui', 3, 'easy'));
console.log(user.hike('Everest', 12, 'hard'));
