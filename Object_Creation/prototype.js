// просто функция выводит гав в консоль
// function talk(sound) {
//   console.log(sound);
// }
// talk('wooof')

// используем this
 function talk() {
   console.log(this); // сейчас это объект animal
   console.log(this.sound); // undefined
 }
 let animal = {
   talk: talk // ECMA6 можно просто talk если свойсво равно его значению
 }
 animal.talk()
// теперь добавим щепотку prototype
let cat = {
  sound: 'meow!'
}
Object.setPrototypeOf(cat, animal)
cat.talk()// Важно! когда выполняет эта команда, интерпретатор проверяет сначала
          // сам объект(cat) и если там нет свойства talk, то он
          // смотрит его в прототипе этого объекта
// теперь мы можем создавать объекты по типу животных с разными звуками
let dog = {
  sound: 'wooof!'
}
Object.setPrototypeOf(dog, animal)
dog.talk()

// прототипы(в отличии от классов) просто делегирую свои свойста объектам,
// а не создают из копии
let prarieDog = {     // пусть объект содердит фукцию переводящую
  howl: function () { // звук объекта в верхний регистр
    console.log(this.sound.toUpperCase());
  }
}
Object.setPrototypeOf(prarieDog, dog) // чтобы заработало прототипу prarieDog
                                      // установим свойство dog
prarieDog.howl()

// В итоге прототип ссылается на другой объект для проверки наличия у него заданных свойств
// которых может не быть у исходного объекта
