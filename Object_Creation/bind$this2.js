// function talk() {
//   console.log(this.sound)
// }
// let boromir = {
//   sound: 'One does not simply walk into Mordor'
// }
// let talkBoundToBoromir = talk.bind(boromir)
// talkBoundToBoromir()

// рассмотрим другой вариант для прояснения того что
// функция в яваскипт просто является значением

let talk = function () { // пусть переменная содержит функию
  console.log(this.sound)
}
// let boromir = {
//   speak: talk, // задаем значение(property) speak = переменной talk
//   sound: 'One does not simply walk into Mordor!'
// }
// boromir.speak() // обращаясь к значениию speak интерпретатор переходит
//                 // переменной явл. функцией выводящей this.sound
//
// // но если мы объявим boromir.speak как переменную
// // let blabber = boromir.speak // получим undefined
//                  // потому что мы не изменили функцию talk
//                           // а только сделали отсылку к свойству speak
//
// // теперь покажем как связать talk и boromir навсегда))
// boromir.speak = talk.bind(boromir)
// let blabber = boromir.speak
// blabber()

// еще пример показывающий что функия это просто значение и
// this зависит от теущего контекста

let boromir =  {
  blabber: talk,
  sound: 'One does not simply walk into Mordor!'
}

let gollum = {
  jabber: boromir.blabber,
  sound: 'My preciousssssssss...'
}
gollum.jabber() // выдаст 'My preciousssss...' потому что this всегда
              // зависит от контекста и в данном случает от gollum
