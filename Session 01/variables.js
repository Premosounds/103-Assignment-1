//var let const
console.log("variable script");
var client; //declaration

var client = "john"; // assign the value

client="sarah";

client="Mike";
console.log(client);

// let

let song ="losing my religion";
song="let it be";
console.log(song);

//const (the same during all the program)

const taxes = 11;
console.log(taxes);

// Please create 4 variables for a student system
var name= "Class Assignment 1";
var description= "creat a program";
var points= 6.6;
var due ="01/25/2021";

//document.write("<h1>" + name + "</h1>" + "<p>"+description+"</p>"+"<p>"+points+"</p>"+"<p>"+due+"</p>");

document.write(`<h1> ${name} </h1>
 <p class="bordered"> ${description} </p>
 <p>Points: ${points}</p>
 <p>Due date: ${due}</p>`);
