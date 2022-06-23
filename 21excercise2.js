console.log('Exercise 2');

let elem = document.createElement('div');
elem.className = 'insertedDiv';
elem.innerText = 'This is inserted div';

let element = document.querySelector('div.container');
element.appendChild(elem);


elem = document.querySelector('div.insertedDiv');
elem.addEventListener('click', function(){
    elem.contentEditable = true;

});

elem.addEventListener('blur', function(){
    console.log(elem.textContent);
    localStorage.setItem('InsertedDiv', elem.textContent);
    // localStorage.clear();
});