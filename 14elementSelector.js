console.log("Element selector");
/*
Element selectors: 
1.single element selector
2. multiple element selector
*/

//Single element selector

let element = document.getElementById('first');
// element = element.className;
// element = element.id;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'blue';
element.innerText = 'Hello, I am Mj.';
element.innerHTML = '<b>Hello, I am Mj.';
// console.log(element.innerText);

let sel = document.querySelector('.child');
sel = document.querySelector('#first');
sel = document.querySelector('div');
sel.style.color = 'green';
// console.log(sel);



//Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(function(element){
    element.toString();
    console.log(element);
});