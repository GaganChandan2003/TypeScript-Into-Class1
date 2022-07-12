//Booleans

let isDone: boolean = false;
isDone=true;
console.log(isDone)

//Number

let price:number=10;
price:12
console.log(price);

//String

let Name : string="Gagan";
let Last:string="Chandan"
let Full=`${Name}_${Last}`;
console.log(Full);

//Array

let arr1:number[]=[1,2,3,4];
let arrayOfString: string[] = ["Masai","School"];
arrayOfString.push("Karnataka");
console.log(arrayOfString);

//Object



// type is syntax to create a blue print|| interface

// type person={
//     first:string;
//     last:string;
//     age:number;
// }

// Or


interface person
{
    first:string;
    last:string;
    age:number;
    isWorking:boolean
}
//Use the same order below
const details: person={
    first:"Gagan",
    last:"Chandan",
    age:19,
    isWorking:true
}

console.log(details);

//Tuples 
//tuples can be called as arrays...!
//the number of elem in the tuple is fixed
//the types of elem are known in advance

let tuple: [string,string,number];//use the same order below
tuple=["Gagan","Chandan",19]; //You cant add more the the above length^, you can add eg string in top arr and can add down

console.log(tuple);

//Enums
//-> A group of named constants
//-> eg action types in redux
enum Color{
    RED="Red",
    BLUE="Blue",
    GREEN="Green"
}
let green=Color.GREEN;
let red=  Color.RED;
let blue= Color.BLUE;

console.log(green,red,blue); //we can use constants or index to console

//Others

let u:undefined;
let n:null;
let a:any;

//Functions

// function sum(a :number,b :number):number
// {
//     return a+b;
// }


// or

const sum=(a :number,b :number):number=>
{
    return a+b;
}

console.log(sum(4,4));

//or

const printName=({first,last,age,isWorking}:person): void=>
{
  console.log(`${first}_${last}`)
}


let person1:person={
    first:"Gagan",
    last:"Chandan",
    age:19,
    isWorking:true
}

printName(person1);

//Union

let output: (number|string|boolean)[]; //we can combine multiple types here 
output=["Gagan",19,true]

//InterSection
//type2 = type1 & type2 eg..

// type softwareDeveloper:
// {

// }
// let coder : (person & softwareDeveloper)={

// }


