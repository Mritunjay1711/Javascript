console.log("Running!");

let a = document.links;
// let c = String(a);
console.log(a);
Array.from(a).forEach(function(element){
    element = String(element);
    if(element.includes('Div')){
        console.log(element);
    }
})
// console.log(c);