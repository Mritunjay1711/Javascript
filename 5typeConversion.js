// type conversion and type coercion

let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));
let booleanVar = true;
console.log(booleanVar, (typeof booleanVar));
let strVar = String(booleanVar);
console.log(strVar, (typeof strVar));

let arr = [1, 3, 3, 4, 5, 6];
console.log(arr, (typeof arr));
let str2 = String(arr);
console.log(str2.length, (typeof str2));


let i = 935;
let j = new Date();
console.log(i.toString());
console.log(j.toString());

//Cannot typecast alphabet to number
let str = Number("345dg");
console.log(str);

let number = parseInt('34.098');
console.log(number, (typeof number));

let n1 = parseFloat('985.3425');
console.log(n1.toFixed(2));


//Type coercion
let mystr = "698";
let mynum = 34;
console.log(mystr + mynum);//Num to string and concatenate