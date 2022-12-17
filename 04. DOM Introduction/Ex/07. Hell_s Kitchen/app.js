function solve() {
   document.querySelector("#btnSend").addEventListener("click", onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (let line of input) {
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');

         for (const worker of workersData) {
            let [name, salary] = worker.split(' ');
            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }

            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = Number(salary);
            }

         }

      }
      let entries = Object.entries(output);
      //  avgSalary = 0;
      for (let entry of entries) {
         let key = entry[0]; // the restaurant name
         let values = Object.values(entry[1]);

         for (let salary of values) {
            totalSalary += salary;
         }
         avgSalary = totalSalary / values.length;

         if (avgSalary > currAvgSalary) {
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }

      }
      let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);
      let print = '';

      result.forEach(x => print += `Name: ${x[0]} With Salary: ${x[1]} `);

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;

      document.querySelector('#workers p').textContent = print;


   }
}


// ["PizzaHut - Peter 500, George 300, Mark 800",
// "TheLake - Bob 1300, Joe 780, Jane 660"]

// ["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650"]