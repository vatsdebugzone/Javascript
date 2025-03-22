let score=33;
let score_new="35"
let score_num_str="36abc"

console.log(typeof score);
console.log(typeof score_new);

let  valueInNumber=Number(score); //conversion
console.log(typeof valueInNumber); // o/p=> number

let  valueInNumberStr=Number(score_num_str); //conversion
console.log(typeof valueInNumberStr)// o/p => number
console.log(valueInNumberStr); //o/p => NaN

let value=null;
let value1=undefined;
let value2=true;

let  value_cast=Number(value);
let  value_cast1=Number(value1);
let  value_cast2=Number(value2);

console.log(value_cast); //0
console.log(value_cast1);//NaN
console.log(value_cast2);//1


/*

33 => 33
"33" =>33
"33abc" => NaN
true=>1; false=>0;
*/

let boolValueExp=1;
let boolRes=Boolean(boolValueExp);
console.log(boolRes);

//boolean
//1=>true;0=>false;
//""=>false;
//"vats"=>true;
console.log("sdfsdf");

console.log({}=={}); // false
//console.log({}==={})//false

console.log(2+2);//sum 4
console.log(2-2);// minus 0
console.log(2*2);// multiply 4
console.log(2/3); // divide 0.66666
console.log(2%3); // modlus remainder2
console.log(3/3); //divide 1
console.log(2**3);//power 8

console.log(1+"1");//11
console.log("1"+1);//11
console.log("1"+"1");//11
console.log(1+2+"3");//33
console.log("1"+2+3);//123
console.log(true);//true
console.log(+true);1
console.log(+"");0
console.log(-"");-0

