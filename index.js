var scope;
if(localStorage.getItem("scope")===null){
    scope=[];
    obj={
        0:"The current context of execution. ",
        1:"The context in which values and expressions are visible or can be referenced.",
        2:"If a variable or other expression is not in the current scope, then it is unavailable for use.",
        3:"Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.",
        4:"A function serves as a closure in JavaScript, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.",

    }
    scope.push(obj);
    localStorage.setItem("scope",JSON.stringify(scope));

}else{
    scope=JSON.parse(localStorage.getItem("scope"));
}

var hoisting;
if(localStorage.getItem("hoisting")===null){
    hoisting=[];
    obj2={
        0:"JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. ",
        1:"Hoisting allows functions to be safely used in code before they are declared.",
        2:"Variable and class declarations are also hoisted, so they too can be referenced before they are declared.",
        3:" Note that doing so can lead to unexpected errors, and is not generally recommended. ",
        4:"One of the advantages of hoisting is that it lets you use a function before you declare it in your code.",

    }
    hoisting.push(obj2);
    localStorage.setItem("hoisting",JSON.stringify(hoisting));

}else{
    hoisting=JSON.parse(localStorage.getItem("hoisting"));
}

var constructor;
if(localStorage.getItem("constructor")===null){
    constructor=[];
    obj3={
        0:"The constructor method is a special method of a class for creating and initializing an object instance of that class. ",
        1:"A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.",
        2:"If you don't provide your own constructor, then a default constructor will be supplied for you. ",
        3:"If your class is a base class, the default constructor is empty.",
        4:"If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided.",

    }
    constructor.push(obj3);
    localStorage.setItem("constructor",JSON.stringify(constructor));

}else{
    constructor=JSON.parse(localStorage.getItem("constructor"));
}


var prototype;
if(localStorage.getItem("prototype")===null){
    prototype=[];
    obj4={
        0:"Prototypes are the mechanism by which JavaScript objects inherit features from one another.",
        1:"Every object in JavaScript has a built-in property, which is called its prototype. ",
        2:"The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. ",
        3:"The chain ends when we reach a prototype that has null for its own prototype.",
        4:"When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property.",

    }
    prototype.push(obj4);
    localStorage.setItem("prototype",JSON.stringify(prototype));

}else{
    prototype=JSON.parse(localStorage.getItem("prototype"));
}



function scopefn(){
   document.querySelector("#content").innerHTML="";
   var scope=JSON.parse(localStorage.getItem("scope"));
   scope.forEach(function(ele){
       var ul=document.createElement("ul");
       var h1=document.createElement("h1");
       h1.innerText="Scope";
       var li1=document.createElement("li");
       li1.innerText=ele[0];
       var li2=document.createElement("li");
       li2.innerText=ele[1];
       var li3=document.createElement("li");
       li3.innerText=ele[2];
       var li4=document.createElement("li");
       li4.innerText=ele[3];
       var li5=document.createElement("li");
       li5.innerText=ele[4];
       var h11=document.createElement("h1");
       h11.innerText="you can also watch video below:"
       var video=document.createElement("video");
       video.width="320";
       var source=document.createElement("source");
       source.src="./jstopics.mp4";
       source.type="video/mp4";
       video.append(source);
       ul.append(h1,li1,li2,li3,li4,li5,h11,video);
       document.querySelector("#content").append(ul);
   })
}

function hoistingfn(){
    document.querySelector("#content").innerHTML="";
   var hoisting=JSON.parse(localStorage.getItem("hoisting"));
   hoisting.forEach(function(ele){
       var ul=document.createElement("ul");
       var h1=document.createElement("h1");
       h1.innerText="hoisting";
       var li1=document.createElement("li");
       li1.innerText=ele[0];
       var li2=document.createElement("li");
       li2.innerText=ele[1];
       var li3=document.createElement("li");
       li3.innerText=ele[2];
       var li4=document.createElement("li");
       li4.innerText=ele[3];
       var li5=document.createElement("li");
       li5.innerText=ele[4];
       var h11=document.createElement("h1");
       h11.innerText="you can also watch video below:"
       var video=document.createElement("video");
       video.width="320";
       var source=document.createElement("source");
       source.src="./jstopics.mp4";
       source.type="video/mp4";
       video.append(source);
       ul.append(h1,li1,li2,li3,li4,li5,h11,video);
       document.querySelector("#content").append(ul);
   })
}

function constructorfn(){
    document.querySelector("#content").innerHTML="";
   var constructor=JSON.parse(localStorage.getItem("constructor"));
   constructor.forEach(function(ele){
       var ul=document.createElement("ul");
       var h1=document.createElement("h1");
       h1.innerText="constructor";
       var li1=document.createElement("li");
       li1.innerText=ele[0];
       var li2=document.createElement("li");
       li2.innerText=ele[1];
       var li3=document.createElement("li");
       li3.innerText=ele[2];
       var li4=document.createElement("li");
       li4.innerText=ele[3];
       var li5=document.createElement("li");
       li5.innerText=ele[4];
       var h11=document.createElement("h1");
       h11.innerText="you can also watch video below:"
       var video=document.createElement("video");
       video.width="320";
       var source=document.createElement("source");
       source.src="./jstopics.mp4";
       source.type="video/mp4";
       video.append(source);
       ul.append(h1,li1,li2,li3,li4,li5,h11,video);
       document.querySelector("#content").append(ul);
   })
}

function prototypefn(){
    document.querySelector("#content").innerHTML="";
   var prototype=JSON.parse(localStorage.getItem("prototype"));
   console.log(prototype);
   prototype.forEach(function(ele){
       var ul=document.createElement("ul");
       var h1=document.createElement("h1");
       h1.innerText="prototype";
       var li1=document.createElement("li");
       li1.innerText=ele[0];
       var li2=document.createElement("li");
       li2.innerText=ele[1];
       var li3=document.createElement("li");
       li3.innerText=ele[2];
       var li4=document.createElement("li");
       li4.innerText=ele[3];
       var li5=document.createElement("li");
       li5.innerText=ele[4];
       var h11=document.createElement("h1");
       h11.innerText="you can also watch video below:"
       var video=document.createElement("video");
       video.width="320";
       var source=document.createElement("source");
       source.src="./jstopics.mp4";
       source.type="video/mp4";
       video.append(source);
       ul.append(h1,li1,li2,li3,li4,li5,h11,video);
       document.querySelector("#content").append(ul);
   })
}