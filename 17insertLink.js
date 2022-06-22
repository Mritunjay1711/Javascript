console.log("Inserting link");

let element = document.createElement('h3');
element.id = 'head';
element.innerText = 'Go to codeWithHarry';

let link = document.createElement('a');
link.setAttribute('href', 'https://www.codewithharry.com');
link.appendChild(element);

let elem = document.getElementById('addLink');
console.log(elem);
elem.appendChild(link);