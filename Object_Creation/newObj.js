function Person(saying) { // конструктор создает объект связанный с
  this.saying = saying // переменной this
}

Person.prototype.talk = function () { // прототип объекта становится новый созданным объетом
  console.log('I say:', this.saying)
}

// let crockford = new Person('SEMICOLONS!!!one1')// new создает новый объект
// crockford.talk()                               // и проверяет проторип объекта
//                                               // и в конце new возвращает созданный объект со всеми заданными свойствами

// чтобы лучше разобраться с new создадим ее(new) сами

function myOwnNew(constructor) {
  let obj = {} // создаем новый объект
  Object.setPrototypeOf(obj, constructor.prototype) //устанавливаем прототип объекта(obj)
  //let argsArray = Array.from(arguments)// преобразуем превдо-массив в массив ECMA6
// преобразование псевдомассива в ECMA5
  var argsArray = Array.prototype.slice.apply(arguments)
  return obj
  //constructor.apply(obj, )
  //console.log(argsArray.slice(1));
}

let crockford = myOwnNew(Person, 'SEMICOLONS!!!1one1')
crockford.talk()
// Итого что делает new
// 1. Создает новый объект
// 2. Определяет(set) прототип
// 3. Запускает конструктор вместе с this
// 4. Возвращает созданный объект
