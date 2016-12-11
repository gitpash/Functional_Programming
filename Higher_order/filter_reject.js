var ANIMALS_FILE = require('./animals.js');
var animals = JSON.parse(ANIMALS_FILE);

//метод find находит 1 обект из массива по заданному условию(if true) и возвращает его
var x = animals.find(function functionName(animal) {
  return animal.name === "Hammilton"
})
// ECMA6 same code
var x = animals.find((animal) => animal.name === "Hammilton")
console.log(x);

// метод map  преобразовывает массив, применяя функцию ко всем его элементам
// и строит новый массив из возвращаемых значений
var names = animals.map(function (animal) {
  return animal.name + 'is a ' + animal.species
})
// ECMA6 same code
var names = animals.map((animal) => animal.name + 'is a ' + animal.species)
console.log(names);

// метод filter принимает в качестве аргумента другую функцию(callback) и проходит
// по каждому элементу массива вставляя этот элемент в качестве аргумента
// callback функции

var dogs = animals.filter(function (animal) {
  return animal.species === "dog"
})
// ECMA6 same code
var dogs = animals.filter((animal) => animal.species === "dog")
console.log(dogs);
 // метод reject инвертирует то, что делает filter // только в underscore.js library и подобных
 /* var isDog = animals.reject (function (animal) {
   return animal.species === "dog"
 })
 console.log(isDog); */
