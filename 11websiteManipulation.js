console.log("Manipulating websites");

let a = window; // window is a global object we can access the member with '.' operator or we can directly call the functions
// window.alert('Hello Mj!');
// alert('Hello Div');
// a = prompt('This is a prompt!');
// a = confirm('Are you sure you want to delete this page?');
// a = window.document;
// a = window.innerHeight;
// a = window.innerWidth;
// a = scrollX;// Displays the value of scroll in X axis
// a = scrollY;
 a = location.href;
 a = location.toString();
 a = history.go(-1); // back
 a = history.go(1); // front
console.log(a); 