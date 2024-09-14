let calc = {
    num1: 0,
    num2: 0,
    
    add: function() {
        return this.num1 + this.num2;
    },
    subtract: function() {
        return this.num1 - this.num2;
    },
    multiply: function() {
        return this.num1 * this.num2;
    },
    divide: function() {
        return this.num1 / this.num2;
    },

    //update
    updateNumbers: function(newnum1, newnum2) {
        this.num1 = newnum1;
        this.num2 = newnum2;
    }
};
calc.updateNumbers(2, 55.323);
console.log("addition: " + calc.add());
console.log("subtraction: " + calc.subtract());
console.log("multiplication: " + calc.multiply());
console.log("division: " + calc.divide());
