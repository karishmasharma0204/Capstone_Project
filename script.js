/* 
Javascript engine- V8 engine

Interpreter - line by line code
Compiler - entire code
*/
/*
Console.log()
Variables-  Container which is used to store the information

Rules for variables- 
1. can't start with numbers
2. can't have even spaces 
3. can start with $, _ , letters
4. can have _ between the letters
5. can't use reserved words


Declaration of the variables-
1. var -  global scope
2. let - local scope, redeclare variables
3. const - local scope , can't redeclare variables


Datatypes in JS -
1. Primitive - numbers, string, bigInt, symbol, null, undefined, boolean
2. Non-primitive - Objects (arrays, functions)
*/

const car = {
  carName: "Swift",
  carModel: 2022,
  carColor: "White",
  carBrand: "Maruti",
  carVariant: "Petrol",
  carType: "Manual",
  carPrice: 1.5
};

console.log(car.carType);
console.log(car["carType"]);

const Scooter = {
  companyName: "Hero",
  brandName: "PLEASURE",
  color: "Bluish Teal",
  actualPrice: 85083,
  ratings: 4.3,
  warrenty: false,
  modeOfShipping: "free",
  isOfferAvailable: true
};

console.log("Do we have any warrenty?", Scooter.isOfferAvailable);
