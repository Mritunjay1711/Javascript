console.log('Arrays and objects');
let marks = [34, 23, 24, 93, 73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed =  ['str', 89, [3, 4]];

const arr = new Array(23, 123, 21, 'Orange');
// console.log(arr);
// console.log(mixed);
// console.log(fruits[1]);

// console.log(arr.length);
// console.log(Array.isArray('dfdf'));
arr[0] = 'Mj';

// let arrelement = arr[0];
// console.log('element: ', arrelement);
// console.log(arr);

let value = marks.indexOf(73);
console.log(value);

console.log(marks);
//Mutating or modifying arrays(changing the array)
// marks.push(99);
// marks.unshift(1000);
// marks.pop();
// marks.shift();
// marks.splice(2, 3);//(index, number of element) to remove
// marks.reverse();
let marks2 = [1, 23, 4, 5];
marks = marks.concat(marks2);
// console.log(marks);


let myobj = {
    'first name': 'Mritunjay',
    course: 'IT',
    isActive: true,
    marks: [1, 5, 8, 9]
}
console.log(myobj);
console.log(myobj['first name']); // accessing a mem with space
console.log(myobj.marks);
