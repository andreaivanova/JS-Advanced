function solve(matrix){
    let biggestNumsEachArray = [];

   matrix.forEach(x => {
        biggestNumsEachArray.push(Math.max(...x));
   });

   let biggestNum = Math.max(...biggestNumsEachArray);
   return biggestNum;
}
