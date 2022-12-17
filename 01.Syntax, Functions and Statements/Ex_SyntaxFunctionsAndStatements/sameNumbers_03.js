function sameNums(n) {
    let areTheSame = true;
    let sum = 0;
    n = n.toString()
        .split('')
        .map(x => Number(x));

    for (let i = 0; i < n.length; i++) {
        sum += n[i];
        if(i === n.length - 1){
            break;
        }
        if (n[i] !== n[i + 1]) {
            areTheSame = false;
            
        }
    }

  //  console.log(n);
    console.log(areTheSame);
    console.log(sum);

}
sameNums(2222222);
//sameNums(1234);