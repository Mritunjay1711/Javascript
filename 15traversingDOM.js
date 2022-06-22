console.log('Traversing DOM');

let cont = document.querySelector('.new');
cont = document.querySelector('.container');
// console.log(cont.childNodes);//This selects even new line and comments
// console.log(cont.children);//This selects only the tags inside the cont

let nodeName = cont.childNodes[3].nodeName;
let nodeType = cont.childNodes[3].nodeType;
// console.log(nodeName);
// console.log(nodeType);

/*
Node types
1.Element
2.Attribute
3.Text node
8.Comment
9.Document
10.docType
*/

let container = document.querySelector('.container');
// console.log(container.children[0].children[0].children); //To get children of a child

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount); //count the child elements

// console.log(container.firstElementChild);
console.log(container.firstElementChild.parentElement);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);