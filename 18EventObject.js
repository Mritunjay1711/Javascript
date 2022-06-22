console.log("Event and Event Object");

document.getElementById('heading').addEventListener('click', function(e){
    console.log("You have clicked the heading");
    // location.href = "//codewithharry.com";
    console.log(e);
    let va = e.target;  
    va = e.target.className;
    va = Array.from(e.target.classList);

    // va = e.target.id;
    // va = e.target.offsetX;
    // va = e.target.offsetY;
    console.log(va);
});