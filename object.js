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

// const Patel={
//     name:'Patel',
//     age:23,
//     address:{
//         city:'surat',
//         state:'gujarat'
//     }
// }

// function showName(a){
//     console.log("Name is :",a.name);
// }

// showName(Patel.name)
// showName({name: "Abc", age:30 })

//04/01/2024
//namefaking

// var english={};
// var spanish={};
// spanish.greeting={}

// english.greet="hello";
// spanish.greeting.greet="hola";

// spanish.greet=()=>{
// console.log("this is a spainsh function!");
// }

// spanish.greet();
// console.log(spanish);

//JSON 

// var objectLiteral= {
//     firstname:'mary',
//     isAprogrammer:true
// }

// console.log(JSON.stringify(objectLiteral));

// var objectLiteral1= JSON.parse('{"firstname":"mary","isAprogrammer":true}')
// console.log(objectLiteral1);


//function are object

//by value(primitive)

// var a=1;
// var b;
// b=a;
// console.log(b);
// a=10;
// console.log(b);

// //by references(object)

// var c= {greeting:'hi'}
// var d;

// d=c

// // console.log(d);

// c.greeting = 'hello';
// // console.log(c);
// // console.log(d);

// function changeGreet(obj){
//     obj.greeting="hola";
// }

// console.log(c);
// changeGreet(d);
// console.log(c);

//this 

//when you try to use keyword in function then its returns the global variable
// var a = function () {
//     console.log(this);
// }
// a();

// function b() {
//     console.log(this);
// }
// b();

// var c = {
//     name: "mayur",
//     age: 22,
//     log: function () {
//         let self = this 
//         self.name = 'Patel'
//         console.log(self);

//         var setName= function(newName){
//             self.name  = newName;
//         }
//         setName("updated again!")
//         console.log("insider function",self);

//     }
// }
// c.log();


//array

// a=[
//     'hello',
//     12,
//     b={
//         firstname:'abc',
//         age:22
//     },
//     function(name){
//         var greeting ="hola"
//         console.log(greeting , name);
//     }
// ]
// console.log(a);
// a[3]("xyz");

//arguments
// function greet(fname,lname,language,...mayur){

//     language = language || "en"
//     console.log(fname);
//     console.log(lname);
//     console.log(language);
//     console.log(arguments)
//     console.log("-----------------------");
// }
// greet();
// greet("Joe")
// greet("Joe","Deo")
// greet("Joe","Deo","es","cvxbw","adqwec")


//function overloading
// function greet(firstname,lastname,language){
//     if(language === "en"){ console.log("hello "+firstname+ " " +lastname );}
//     if(language === "es"){ console.log("hola "+firstname+ " " +lastname );}
// }
// function english(firstname,lastname){
//     greet(firstname , lastname,'en')
// }
// function spainsh(firstname,lastname){
//     greet(firstname ,lastname,'es')
// }
// english("John","Deo")
// spainsh("Mary","Deo")

//IIFE

// (function(name){
//     console.log("hello " +name); 
// }("jeo"));

//Closures

// function x(){
//     var a=7
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);

// //......many lines of code

// z();//the function y still bundle with the its laxical scope and its called closures

//call,apply,bind
