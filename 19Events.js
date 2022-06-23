console.log('More on events');

// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);
// // btn.addEventListener('mousedown', func3);


// function func1(e){
//     console.log('Thanks', e);
//     e.preventDefault(); //to prevent it from getting submitted
// }

// function func2(e){
//     console.log('Thanks its a double click', e);
//     e.preventDefault(); //to prevent it from getting submitted
// }

// function func3(e){
//     console.log('Thanks its a mouse down', e);
//     e.preventDefault(); //to prevent it from getting submitted
// }

// document.querySelector('.new').addEventListener('mouseenter', function(){
//     console.log('You have entered new');
// });

// document.querySelector('.new').addEventListener('mouseleave', function(){
//     console.log('You have left new');
// });


document.querySelector('.container').addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 250)`
    console.log('You triggered mouse move');
});