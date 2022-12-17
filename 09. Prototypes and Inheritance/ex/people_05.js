function solution() {
    let counter = 0;
    class Employee {

        constructor(name, age) {

        
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            //   this.dividend = 0;
        }



        work() {
            let current = this.tasks.shift();
            console.log(current);
            this.tasks.push(current);
            // for (let i = counter; i < this.tasks.length; i++) {

            //     console.log(this.tasks[i]);
            //     if (counter === this.tasks.length - 1) {
            //         counter = 0;
            //     } else {

            //         counter++;
            //     }
             

            // }

        }
        getSalary() {
            return this.salary;
        }

        collectSalary() {
            return console.log(`${this.name} received ${this.getSalary()} this month.`);
        }



    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a complicated task.`, `${this.name} is taking time off work.`, `${this.name} is supervising junior workers.`];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} scheduled a meeting.`, `${this.name} is preparing a quarterly report.`];;
            this.dividend = 0;
        }
        getSalary() {
            return super.getSalary() + this.dividend;
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}

const classes = solution();

const junior = new classes.Junior("Ivan", 25);

// junior.work();


//  junior.salary = 5811;
//  junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);
sinior.salary = 21520;
sinior.collectSalary();
sinior.work();
sinior.work();
sinior.work();
console.log('--');
sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();  

//  manager.work();
//  manager.work();
//   manager.work();
// // manager.work();
// // manager.work();
// // manager.work();
// // manager.work();
