(function solve() {
    String.prototype.ensureStart = function (value) {
        if (!this.startsWith(value)) {
            return value + this;
        } else {

            return this.toString();
        }
    }

    String.prototype.ensureEnd = function (value) {
        if (!this.endsWith(value)) {
            return this + value;
        } else {
            return this.toString();
        }
    }


    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    String.prototype.truncate = function (n) {
        // if (this.length <= n) {
        //     return this + '';
        // } else {
        //     let arr = this.slice();
        //     arr = arr.split(' ');
        //     if (arr.length === 1) {
        //         if (n < 4) {

        //             return '.'.repeat(n);
        //         }
        //         arr = arr.join(' ').split('');
        //         let output = '';
        //         for (let i = 0; i < n - 3; i++) {
        //             output += arr[i];
        //         }
        //         output += '...';
        //         return output;
        //     }
        //     arr[arr.length - 1] = '...';
        //     arr[arr.length - 2] = arr[arr.length - 2] + arr[arr.length - 1];
        //     arr = arr.slice(0, arr.length - 2)
        //     arr = arr.join(' ');

        //     return arr;

        // }
        if (n<3){
            return '.'.repeat(n);
        } 
        if(this.toString().length <=n){
            return this.toString();
        } else {
            let lastIndex = this.toString().substring(0,n-2).lastIndexOf(' ');
            if (lastIndex!==-1){
                return this.toString().substring(0,lastIndex)+'...';
            } else {
                return this.toString().substring(0,n-3)+'...'
            }
        }


    }

    String.format = function (text, ...args) {
        //  console.log(args);
        for (let i = 0; i < args.length; i++) {
            text = text.replace(`{${i}}`, args[i])
        }
        return text;
    }
    
})()
//solve()
//let str = 'quick brown fox jumps over the lazy dog';
// str = str.ensureStart('the ');
// console.log(str);
// str = str.ensureStart('the ');
// console.log(str);


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
console.log(str);
console.log(str.isEmpty());
 str = str.truncate(16);
 console.log(str);

 str = str.truncate(14);
 console.log(str);

str = str.truncate(8);
 console.log(str);
 str = str.truncate(4);
 console.log(str);

 str = str.truncate(2);

 console.log(str);
 str = str.truncate(1);

 str = String.format('The {0} {1} fox',
   'quick', 'brown');
console.log(str);

 str = String.format('jumps {0} {1}',
   'dog');
   console.log(str);