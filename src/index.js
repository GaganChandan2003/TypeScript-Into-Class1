//Booleans
var isDone = false;
isDone = true;
console.log(isDone);
//Number
var price = 10;
price: 12;
console.log(price);
//String
var Name = "Gagan";
var Last = "Chandan";
var Full = "".concat(Name, "_").concat(Last);
console.log(Full);
//Array
var arr1 = [1, 2, 3, 4];
var arrayOfString = ["Masai", "School"];
arrayOfString.push("Karnataka");
console.log(arrayOfString);
//Use the same order below
var details = {
    first: "Gagan",
    last: "Chandan",
    age: 19,
    isWorking: true
};
console.log(details);
//Tuples 
//tuples can be called as arrays...!
//the number of elem in the tuple is fixed
//the types of elem are known in advance
var tuple; //use the same order below
tuple = ["Gagan", "Chandan", 19]; //You cant add more the the above length^, you can add eg string in top arr and can add down
console.log(tuple);
//Enums
//-> A group of named constants
//-> eg action types in redux
var Color;
(function (Color) {
    Color["RED"] = "Red";
    Color["BLUE"] = "Blue";
    Color["GREEN"] = "Green";
})(Color || (Color = {}));
var green = Color.GREEN;
var red = Color.RED;
var blue = Color.BLUE;
console.log(green, red, blue); //we can use constants or index to console
//Others
var u;
var n;
var a;
//Functions
// function sum(a :number,b :number):number
// {
//     return a+b;
// }
// or
var sum = function (a, b) {
    return a + b;
};
console.log(sum(4, 4));
//or
var printName = function (_a) {
    var first = _a.first, last = _a.last, age = _a.age, isWorking = _a.isWorking;
    console.log("".concat(first, "_").concat(last));
};
var person1 = {
    first: "Gagan",
    last: "Chandan",
    age: 19,
    isWorking: true
};
printName(person1);
//Union
var output; //we can combine multiple types here 
output = ["Gagan", 19, true];
//InterSection
//type2 = type1 & type2 eg..
// type softwareDeveloper:
// {
// }
// let coder : (person & softwareDeveloper)={
// }
