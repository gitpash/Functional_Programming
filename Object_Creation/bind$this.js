let dog = {  // объект
  sound: 'woof', // свойство(property) 'гав'
  talk: function () { // метод
    console.log(this.sound); // который выводит свойство sound в консоль
  }
}

dog.talk() // при вызове метода объекта консоль выдаст 'woof'

let talkFunction = dog.talk // метод объекта(dog.talk) при присвоении его переменной
                            // становится просто функцией, как бы отвязываясь от объекта
// talkFunction() // и при вызове функции выдаст "undefined"

// чтобы это исправить нужно привязать эту функцию к объекту
let boundFunction = talkFunction.bind(dog) // создаем переменную и применяем метод bind
boundFunction()                           // который берет talkFunction и возвращает
                                          // новую функцию boundFunction которая привязывает
                                          // dog к методу talk и выводит 'woof'

// пример из Enterprise level
let button = document.getElementById('myNiceButton')

button.addEventListener( // для нашей кнопки
  'click', // для click handler
  dod.talk.bind(dog) // назначаем метод talk, но this будет относиться к dog
                    // только после применения метода bind(dog)
)
