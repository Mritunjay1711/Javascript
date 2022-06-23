//Local and Session Storage
console.log('Storage');

let impArray = ['adrak', 'pyaz', 'bhindi'];
//Add a key value pair inside storage
localStorage.setItem('Name', 'Mj');
localStorage.setItem('Name2', 'Divyansi');
localStorage.setItem('Sabzi', impArray);//This will insert a string.

localStorage.setItem('Sabzi', JSON.stringify(impArray)); // Still a string but can be accessed as array


// localStorage.clear(); // clears the entire storage

//clear a particular item
// localStorage.removeItem('Name');


//Retrieve an item from local storage
let name = localStorage.getItem('Name2');
// let Sabzi = localStorage.getItem('Sabzi');
Sabzi = JSON.parse(localStorage.getItem('Sabzi'));//Converts into array
console.log(name);
console.log(Sabzi, (typeof Sabzi));


/***** Session Storage (only there till a session)*****/
// sessionStorage.setItem('Name', 'Mj');
// sessionStorage.setItem('Name2', 'Divyansi');

