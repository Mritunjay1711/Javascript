const name = 'Mritunjay';
const greeting = 'good morining';

// console.log(greeting+name);

let html;
html = "<h1> this is heading</h1>"+
        "<p> this is My parA</p>";

html = html.concat('this', ' str');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());


// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));
// console.log(html.substring(1,6));
// console.log(html.slice(-4))
// console.log(html.split('t')); // splits the string at the given character
// console.log(html.replace('this', 'it'));

let fruit1 = 'Orange\''; // \ used to print single quote ';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;   