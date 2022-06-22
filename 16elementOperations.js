console.log("Element operation");

let element = document.createElement('li');

//one way to insert text
let text = document.createTextNode('Created text');
element.appendChild(text);

//Add class name to li
element.className = 'child';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
//other way to insert text
//  element.innerText = 'Appended element';


let ul = document.querySelector('ul.list');
ul.appendChild(element);
// console.log(ul);
// console.log(element);


let elem2 = document.createElement('h2');
elem2.id = 'elem2';
elem2.className = 'eleme2';

let tNode = document.createTextNode('This is a text node for elem2');
elem2.appendChild(tNode);

element.replaceWith(elem2);


let myul = document.getElementById('first');
myul.replaceChild(element, document.getElementById('listel')); // param(new, old child);

// let pr = elem2.getAttribute('id');
// let pr = elem2.hasAttribute('id');
elem2.removeAttribute('id');
// console.log(pr);
console.log(elem2);

