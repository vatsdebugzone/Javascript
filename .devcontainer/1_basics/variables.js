const id=1;
var name="duggu";
/* Preferred not to use var 
because of issue in block scope and functional scope */

let email="duggu@gmail.com";
city="Noorpur";
city="Bijnor";

let region; // output will be undefined without assigning any value to let variable
//id=2; //reassignement of const variable are not allowed




email="navneetvats18@gmail.com";
console.log(id);
console.log(email);
console.table([id,name,email,city,typeof(city),region]);
