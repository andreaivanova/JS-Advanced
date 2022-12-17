class Company {
    constructor(departments = {}) {
        this.departments = departments;
    }

    addEmployee(name, salary, position, department) {
        if (name === '' || name === undefined || name === null) {
           // console.log('Invalid input!');
            throw new Error('Invalid input!');
        }
        if (salary === '' || salary < 0 || salary === undefined || salary === null) {
    //console.log('Invalid input!');
            throw new Error('Invalid input!');
        }
        if (position === '' || position === undefined || position === null) {
           // console.log('Invalid input!');
            throw new Error('Invalid input!');

        }
        if (department === '' || department === undefined || department === null) {
           // console.log('Invalid input!');
           throw new Error('Invalid input!');

        }
        let newEmployee = [name, salary, position]
        if (!this.departments.hasOwnProperty(department)){

            this.departments[department] = [newEmployee];
        } else {
            this.departments[department].push(newEmployee);
        }
        return `New employee is hired. Name: ${newEmployee[0]}. Position: ${newEmployee[2]}`;
    }


    bestDepartment() {
        let bestDepartment = '';
        let maxSalary = 0;
        for(let department in this.departments){
            let salary = 0;
         //   console.log(department);
           this.departments[department].forEach(x=>salary+=x[1])
           salary = salary /  this.departments[department].length
            if (maxSalary < salary){
                maxSalary = salary;
                bestDepartment = department;
            }

        }
        //console.log(bestDepartment);
       // console.log(maxSalary);
      //  return '';
    //   let avgSalary=  this.departments.reduce((x,y)=>x[1]+y[1])/this.departments.length;

    //     // for (let [name, salary, position, department] of this.departments) {
    //     //     console.log(salary);
    //     // }
        this.departments[bestDepartment].sort((a, b) => {
            // if (a[1]===b[1]){
            //     return a[0].localeCompare(b[0]);
            // }
            // return b[1] - a[1];
            let firstCriteria = a[0].localeCompare(b[0]);
            let secondCriteria = b[1] - a[1];
            return secondCriteria || firstCriteria;
        }
        )
        let output =``;
        output+= `Best Department is: ${bestDepartment}\nAverage salary: ${maxSalary.toFixed(2)}\n`
       //return 

        for (let i = 0; i < this.departments[bestDepartment].length; i++) {
            let x = this.departments[bestDepartment][i]
            if (i === this.departments[bestDepartment].length - 1){
                output+= `${x[0]} ${x[1]} ${x[2]}`
                break;
            }
            output+= `${x[0]} ${x[1]} ${x[2]}\n`
        }
    //    this.departments[bestDepartment].forEach(x=>
    //        output+= `${x[0]} ${x[1]} ${x[2]}\n`
    //         )
            return output;

    }

}


let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
//console.log(c);
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


/*
Best Department is: Construction
Average salary: 1500.00
Stan 2000 architect
Stanimir 2000 engineer
Pesho 1500 electrical engineer
Slavi 500 dyer

*/