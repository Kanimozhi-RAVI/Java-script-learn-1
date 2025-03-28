/*let a, b, c;
a=10;
b=5;
c=a+b;*/
console.log(c);
console.log('kanimozhi');
console.log([58,20,10]);
console.table({fname:'kani',age:'21'});
console.error("custom arror");



{
    let a=10;
    console.log(a);
}
var a=10;
var b=28;
var c=a+b;
console.log(c);
//ARITHMETIC OPERATORS
const e=10;
const f=65;
const d=e+f;
console.log(d);

 let x=50;
 x>>=2;
 console.log(x);

 let y = 100;
 y |= 5;
 console.log(y);


 let fname=60;
 fname&=50;
 console.log(fname);
 let lname =40;
 lname|=10;
 console.log(lname);
 let xy=58;
 xy^=22;
 console.log(xy);

 var car = 10;
 car += 5;
console.log(car);

var start = 10;
start -= 5;
console.log(start);

var div = 10;
div /= 5;
console.log(div);

var madulus = 10;
madulus %= 5;
console.log(madulus);

var and = 10;
and &= 5;
console.log(and);

var or = 10;
or |= 5;
console.log(or);

var xor = 10;
xor ^= 5;
console.log(xor);

 let ab = 100;
 ab &&= 4;
 console.log(ab);

 let ac = 100;
 ac ||= 4;
 console.log(ac);

 let cd = 100;
 cd **= 4;
 console.log(cd);

 let yz = 100;
 yz != 4;
 console.log(yz);
 
 let xz = 100;
 xz <<= 4;
 console.log(xz);
//WE CAN ADD THE VALUES
const bus = {color:"red", height:"10feet", fuel:'deisel'}
bus.color = 'orange';

console.log(bus.color)

const train = ['track', "wheel", "passanger"];
console.log(train[1]);
console.log(train);


// Numbers:

let length = 16;
let weight = 7.5;
console.log(typeof(16));


// Strings:
{
let color = "Yellow";
let lastName = "Johnson";
console.log(typeof(color));
}

// Booleans
{
let xs = true;
let sx = false;
console.log(typeof(xs));
}

// Object:
{
const person = {firstName:"John", lastName:"Doe"};
console.log(typeof(person));
}

// Array object:
{
const cars = ["Saab", "Volvo", "BMW"];
console.log(typeof(saab));
}

// Date object:
{
const date = new Date("2022-03-25");
console.log(typeof(date));
}

function myFunction(a,b){
return a*b;
}
let Number = myFunction(4, 3);
document.getElementById("num").innerHTML = Number;

function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
  let value = toCelsius(77);
  document.getElementById("cel").innerHTML = value;


let text = "The temperature is " + toCelsius(77) + " Celsius.";
document.getElementById("temp").innerHTML = text;

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 

let sub = "The bus color is " + busproperty('red with black') + " Amazing.";
document.getElementById("bus").innerHTML = sub;

function busproperty(color) {
  return color;
} 
// object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  document.getElementById("person").innerHTML =
  person.firstName + " is " + person.age + " years old.";


  const man = {
    firstName: "Nick",
    lastName : "jean",
    id     :  1002
  };
  
  // Display name from the Object:
  document.getElementById("man").innerHTML =
  "The name is"+ man.firstName + man.lastName + "<br>"+ "Id:"+ man.id;


  const human = {
    firstName: "John",
    lastName : "Doe",
    age      :  50,
    nickname :{
        Name1:"joe",
        Name2:"DOOO",
        Name3:"Tom"
    }
  }
   human.eyeColor="blue";
  delete human.age;
  let xyz = "firstName";
  let zyx = "age";
  document.getElementById("human").innerHTML = human[xyz] + " is " + human[zyx] + " years old." + "<br>" + "The human eye color is:" 
  + human.eyeColor +"<br>"+ "The nick name is  " + human.nickname.Name3;


  //constructor
  function Person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function() {
      return this.firstName + " " + this.lastName
    };
  }
  
  
  const myFather = new Person1("John", "Doe", 50, "blue");
  const myMother = new Person1("Sally","Rally",48,"green");

  document.getElementById("person1").innerHTML =
  "My father is " + myFather.fullName() + " My mother name is" + myMother.firstName ; 

  
