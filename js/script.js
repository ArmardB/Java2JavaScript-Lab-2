" use strict ";

// function Pet(){
//   this.type = type;
//   this.name = name; 
// }

var pets = [];

class Pet{
  constructor(name, type){
  this.type = type;
  this.name = name;
  this.speak = function(){
    return "Hey there";
  }
  }
}


class Dog extends Pet {
    speak(){
      return "Woof";
  }
 
}

class Cat extends Pet {

  speak(){
    return "Meow";
  }
}

class Armadillo extends Pet{
  speak(){
    return "Hsssssss";
  }
}

function getName(){
  return this.name;
}

function getType(){
  return this.type;
}


function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)").toLowerCase();
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
  
      // var textOut = type + " " + name + "<br />";
      
      // display.innerHTML += textOut;

      switch(type){
        case "dog":
          pets.push(new Dog(Dog, name));
          break;
        case "cat":
          pets.push(new Cat(Cat, name));
          break;
        case "armadillo":
          pets.push(new Armadillo(Armadillo, name));
          break;
        default:
          pets.push(new Pet(type, name));
          break;
      }
      
      
    }
    printPets(pets);
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var chat = new PetChat();
chat.init();

function printPets(){
  var str = "";
  for(var i = 0; i < pets.length; i++){
    // str += "Type: " + pets[i].type + " " + "Name: " + pets[i].name ;
    str += pets[i].name;
  }

  display.innerHTML = str;
}
