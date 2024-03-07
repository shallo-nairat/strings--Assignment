let a ='extravaganza';
console.log({Character:a[8]});
console.log({Character:a[9]});
console.log({Character:a[10]});
console.log({Character:a[11]});

//Insert string at the fourth index

const food = "The quick fox jumped over the lazy dog"
console.log({index: food.indexOf('q')});
let b = "eat";

//counting the times the string appears
let food2="The\"eat\"quick fox jumps over the lazy dog";
console.log({food2})

const story="The quick brown fox jumps over the lazy dog";
console.log((story.match(/the/g)).length);
console.log((story.match(/brown/g)).length);
//
//find the words "are " "string" from the following string
let string1= "The pupils are reading in the library";
let subtring = "the";
console.log(string1.includes(subtring));

let string2 = "The child was sitting on the table before it fell"
let substring2 ="sitting";
console.log(string2.includes(substring2));


let f="wonderful";
const upper =f.toUpperCase();
console.log({upper});

let text="amazing";
const word= text.toLowerCase();
console.log({word});

let h="UndERneath" ;
const lower = h.toLowerCase();
console.log({lower});

let i="A wonderful world";
function titlecase(str){
    return str.toLowerCase().replace(/\b\w/g, s=>s.toUpperCase())

}
console.log(titlecase(`A wonderful world`))


