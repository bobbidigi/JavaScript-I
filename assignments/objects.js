// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

  const mitzi = {
    "id": 1,
    "email": "mmelloy0 @psu.edu",
    "first_name": "Mitzi",
    "gender": "F"
  }
  const kennan =
  {
    "id": 2,
    "email": "kdiben1@tinypic.com",
    "first_name": "Kennan",
    "gender": "M",
    'speak': () => console.log(`hello my name ${kennan.first_name}`)
  }
  const keven =
  {
    "id": 3,
    "email": "kmummery2@wikimedia.org",
    "first_name": "Keven",
    "gender": "M"
  }
  const gannie =
  {
    "id": 4,
    "email": "gmartinson3@illinois.edu",
    "first_name": "Gannie",
    "gender": "M"
  }
  const antonietta =
  {
    "id": 5,
    "email": "adaine5@samsung.com",
    "first_name": "Antonietta",
    "gender": "F",
    "multiplyNums": (num1, num2) => {
      return num1 * num2;  
    }
  }
// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Write your intern objects here:


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi.first_name);
// Kennan's ID
console.log(kennan.id);
// Keven's email
console.log(keven.email);
// Gannie's name
console.log(gannie.first_name);

// Antonietta's Gender
console.log(antonietta.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
kennan.speak();

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  "name": "Susan",
  "age": 70,
  speak: function() {
     console.log(`${this.name}`)
  },
  "child": {
    "name": "Georgia",
    "age": 50,
    speak: function () {
      console.log(`${this.name}`)
    },
    "grandchild": {
      "name": "Sam",
      "age": 30,
      speak: function () {
        console.log(`${this.name}`)
      },
    }  
  }
}

// Log the parent object's name
parent.speak();

// Log the child's age
// child.speak();
child.speak();
// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
