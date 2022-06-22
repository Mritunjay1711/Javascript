console.log('Hello');
//varibles in js
//var, let, const
var names = 'harry';
var str = `Mritun"j'ay`;//for single and double quotes printing use ``
console.log(names);
var channel;
console.log(str, channel);
//Rules for creating JavaScript variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers or $
3. Are case sensitive
*/
 var city = 'Patna';
 console.log(city); 
 
 const ownerName = 'Hari Ram';
//  ownerName = 'Mj'; //const varibales cannot be changed
 console.log(ownerName);

 {
     let city = 'Rampur';//scope within block
     console.log(city);
 }
 console.log(city);


 const arr1 = [12, 34, 94, 53, 3];
 arr1.push(45); // can be done
//cannot redeclare arr1
console.log(arr1);

/*Most common programming case types
 1. camelCase
 2. kebab-Case
 3. snake_case
 4. PascalCase
*/