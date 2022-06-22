//Primitive data types

// String
let name = "mj";
console.log("my string is "+ name);
console.log("Data type is "+ (typeof name));

// Number
let marks = 34;
console.log("my number is "+ marks);
console.log("Data type is "+ (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is "+ (typeof isDriver));

// null
let nullVar = null;
console.log("Data type is "+ (typeof nullVar));

// undefined
let undef = undefined;
console.log("Data type is "+ (typeof undef));


//Reference data type

//Arrays
let myArr = [1, 3, 5, 9, false, "Mj"];
console.log("Data type is "+ (typeof myArr));

//Object literals
let stMarks = {
    Mj: 93,
    Div: 95,
    Adarsh: 83
}
console.log(stMarks);
console.log(typeof stMarks);

function findName() {
    
}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);