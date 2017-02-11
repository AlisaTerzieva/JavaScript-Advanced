(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (this.indexOf(str) != 0){
            return str + this;
        }
        else return this.toString()
    };
    String.prototype.ensureEnd = function (str) {
        if(this.indexOf(str) != this.length - str.length - 1){
            return this + str;
        }
    }
    String.prototype.isEmpty = function () {
        if (this.length == 0){
            return true;
        }
        else return false;
    }
    String.prototype.truncate = function (n) {

        if (this.length < n){
        return this.toString()
        }
        else if (n < 4){
            return ".".repeat(n);
        }
        else {
        let newStr = this.slice(0,n-3);
        let lastWS = newStr.lastIndexOf(" ");
        if (lastWS != -1) {
            return newStr.slice(0, lastWS) + "...";
        }
        else
            return newStr + "...";
        }
    }
    String.format = function (str, ...arg) {
        let regex = new RegExp('{\\d+}', "g");
        str.replace(regex, function () {

        });
        return str;
    }
})()

stringExtension();
let str = 'my string';
console.log(str.ensureStart('my'));
console.log(str.ensureStart('hello '));
str = 'hello my string';
console.log(str.truncate(16));
console.log(str.truncate(14));
console.log(str.truncate(8));
console.log(str.truncate(4));
console.log(str.truncate(2));
str1 = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str1);
str2 = String.format('jumps {0} {1}',
    'dog');
console.log(str2);
