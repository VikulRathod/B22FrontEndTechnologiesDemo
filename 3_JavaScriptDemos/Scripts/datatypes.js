document.getElementById('btn1').onclick = btnClick;

function btnClick() {
    alert('External JS Function Called');
}

document.write('<br/>Variable Values<br/>');

var a = 10;
document.write(a + '<br/>');
a = 10.545;
document.write(a + '<br/>');

var b = true;
document.write(b + '<br/>');

var s = 'vishal';
document.write(s + '<br/>');
s = "Vishal";
document.write(s + '<br/>');

var len = s.length;
document.write('Number of Characters : ' + len + '<br/>');

var s1 = "Vishal";
var s2 = "Rathod";
var s = s1 + ' ' + s2.trim();
document.write(s + '<br/>');
console.log(s);

s = s1.concat(' ', s2);
document.write(s + '<br/>');

// show value within double quote
// var v1 = '"vishal"';
// var v1 = "'vishal'";
/*var v1 = "\"vishal\"";*/
var v1 = "Vishal Rathod";
// document.write(v1 + '<br/>');
document.getElementById('txt').value = v1;

document.write(v1.toUpperCase() + '<br/>');
document.write(v1.toLowerCase() + '<br/>');

var fn = "anup", ln = "Rathod";
// var fullName = $"Full Name : {fn} {ln}"; // no correct
var fullName = `Full Name : ${fn} ${ln} <br/>`;
document.write(fullName);

var a = 10, b = 10;
document.write(`Addition : ${a} + ${b} = ${a + b} <br/>`);

var empname = 'kamala';
var i1 = empname.indexOf('a');
document.write(`index of a :  ${i1} <br/>`);

i1 = empname.lastIndexOf('a');
document.write(`last index of a :  ${i1} <br/>`);

var email = 'vishal2024@gmail.com';
// username : vishal2024
// domain : gmail.com
var result = email.substring(5, 10);
document.write(`substring(): ${result} <br/>`);

result = email.slice(5, 10);
document.write(`$slice() : ${result} <br/>`);

result = email.substr(5, 10);
document.write(`substr() : ${result} <br/>`);

email = 'vishal2024@gmail.com';
email = 'shitaldeshpande1990@rediffmail.com';
var index = email.indexOf('@');
// -1 means not found, 0 or greater than 0 exists
var username = email.substring(0, index);
var domain = email.substring(index + 1, email.length);
document.write(`Email : ${email} <br/> Username : ${username} Domain : ${domain} <br/>`);

var content = `.NET Core Technology Course
Introduction
Objective:
Provide a comprehensive understanding of.NET Core technology for beginners.
    Module 1: Introduction to.NET Core
Overview of.NET Technology

Introduction to the.NET framework.
Comparison between.NET Framework and.NET Core.
    Understanding.NET Core

Key features of.NET Core.
    Cross - platform development.
Setting Up Development Environment

Installing Visual Studio Code or Visual Studio.
    Configuring.NET Core SDK.
        Module 2: C# Programming Basics
Getting Started with C#

Data types, variables, and constants.
Basic input / output operations.
Control Flow in C#

Conditional statements(if, else, switch).
Looping structures(for, while).
Functions and Methods

Defining and calling functions.
Function parameters and return types.
    Module 3: Object - Oriented Programming(OOP) with C#
Introduction to OOP

Classes and objects.
    Inheritance, encapsulation, and polymorphism.
Working with Classes and Objects

Creating and using classes.
Understanding constructors and destructors.
Interfaces and Abstract Classes

Implementing interfaces.
Defining and using abstract classes.
    Module 4: .NET Core Application Development
Building Console Applications

Creating and running a simple console application.
Debugging and error handling.
Introduction to ASP.NET Core

Basics of web development with ASP.NET Core.
Creating a simple web application.
Understanding MVC Architecture

Overview of Model - View - Controller(MVC) pattern.
Building MVC applications in .NET Core.
    Module 5: Database Interaction with Entity Framework Core
Introduction to Entity Framework Core

Overview of ORM(Object - Relational Mapping).
Setting up Entity Framework Core.
    Code - First and Database - First Approaches

Creating databases using code - first approach.
Generating models from existing databases.
CRUD Operations with EF Core

Performing CRUD operations using Entity Framework Core.
    Module 6: Web API Development with .NET Core
Introduction to Web APIs

Understanding RESTful principles.
Basics of API development.
Building RESTful APIs with ASP.NET Core

Creating and configuring Web APIs.
Handling HTTP methods and status codes.
Consuming Web APIs

Making HTTP requests from.NET Core applications.
Working with JSON data.
    Module 7: Deployment and Hosting
Preparing for Production

Configuring environment variables.
Managing application settings.
    Deploying.NET Core Applications

Deploying to cloud platforms(e.g., Azure, AWS).
Containerization with Docker.
Continuous Integration and Deployment(CI / CD)

Setting up CI / CD pipelines.
Automating deployment workflows.
    Module 8: Testing in .NET Core
Introduction to Unit Testing

Basics of unit testing.
Testing frameworks in .NET Core(e.g., xUnit, MSTest).
Writing and Running Unit Tests

Creating and executing unit tests.
    Test - driven development(TDD) principles.`;


// var r1 = content.replace('.NET Core', 'REACT');
var r1 = content.replace(/.NET Core/g, 'REACT');
document.getElementById('content').innerHTML = r1;

//var shortText = content.substring(0, 100);
//document.getElementById('content').innerHTML = shortText + ' <a href="#">read more...</a>';


var sentence = 'I want to learn Dot Net. I like dot Net. I love DOT NET';
document.write(sentence + '<br/>');
var r2 = sentence.replace(/Dot Net/gi, 'Modelling');
document.write(r2 + '<br/>');
