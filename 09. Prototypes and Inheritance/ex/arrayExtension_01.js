(
    function solve(arr) {


    Array.prototype.last = function last() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function skip(n) {
        if (n > 0 && n < this.length) {


            let arr = [];
            for (let i = n; i < this.length; i++) {
                arr.push(this[i]);
            }
            return arr;
        }
    }

    Array.prototype.take = function take(n) {
        if (n > 0 && n < this.length) {
            let arr = [];
            for (let i = 0; i < n; i++) {
                arr.push(this[i])
            }
            return arr;
        }
    }

    Array.prototype.sum = function sum() {
        let outputSum = 0;
        for (let i = 0; i < this.length; i++) {
            outputSum += this[i];
        }
       return outputSum;
    }

    Array.prototype.average = function average() {
        return this.sum() / this.length;
    }

  // console.log(arr.last());

}
//solve([1,2,3])
)()