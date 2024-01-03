// address={
//     Street:'main',
//     number:12234321,
//     Apartment:{
//         floor:3,
//         number:301
//     }
// }

// global object

// var a 
// console.log(a);

// function b(){
//     var xyz="how are you?"
// }

// a= 'heeloo'


//if any function is inside the object then we say that function method... method->obj
//normal function->global object(window, global)

// const a={
//     title:'abc',
//     play(){
//         console.log(this)
//     }
// }

// function Video(title){
//     this.title = title
//     console.log(this);
// }

// const v=new Video('a')

// function b(){
//     console.log("This is function B");
// }

// b();

// console.log(a);

// var a="this is variable A"

// console.log(a);

//03/01/2002
//Variable Environment

// function b(){
//     var myVar;
//     console.log("this for b:",myVar);
// }
// function a(){
//     var myVar=2;
//     console.log("this for a:",myVar);
//     b();
// }
// var myVar = 1;
// console.log("this for 1:",myVar);
// a();

//scope chain
// function b(){console.log("this in b function",myVar);}
// function a() {
//     console.log("this is in A function",myVar);
//     var myVar = 2;   
//     b();
// }

// var myVar = 1;  
// console.log(myVar);
// a();

//let 

// let a=20
// console.log(a)
// var b=10


// Async Callback

//long running function
// function waitForWhile(){
//     var ms = 3000 + new Date().getTime();
//     while(new Date() < ms){}
//     console.log('Finished Function!');
// }

// function handleEvent(){
//     console.log('click event!');
// }

// addEventListener("click",handleEvent)

// waitForWhile();
// console.log('finish execution');

//operator precedence and associstivity

// const hello = 3 + 4 * 5;
// console.log(hello);


// function greet(name){
//     name = name || '<your default name>'
//     console.log("hello" , name);
// }

// greet('mayur')
// greet()

//default values
// console.log(libName);


//Objects

// const person = new Object();

// person["name"] = "mayur"
// person["age"] = 20

// person.address = new Object();

// person.address["city"] ="Surat"
// person.address["state"] ="Gujarat"

// person["gender"]="male"
// console.log(person);
// console.log(person["address"]["state"]);

const Patel={
    name:'Patel',
    age:23,
    address:{
        city:'surat',
        state:'gujarat'
    }
}

function showName(a){
    console.log("Name is :",a.name);
}

showName(Patel.name)
showName({name: "Abc", age:30 })