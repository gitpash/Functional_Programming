// Object.create создает новый объект с prototype установленным
// для этого ноовго объекта

const cat = {  // создаем объект с методом(свойством)
  init: function (sound) {
    this.sound = sound
    return this
  },
  makeSound: function () { // который явл. функцией
    console.log(this.sound); // которая выводит в консоль свойство sound для любого this
  }
}
const mark = Object.create(cat) //создает новый объект и устанавливает прототипом этого обекта - cat
mark.sound = 'meuffff' // здесь мы устанавливаем свойство sound в 'meuffff'
mark.makeSound() // это отсылает программу к makeSound свойству в первом объекте

const waffles = Object.create(cat)
waffles.sound = 'mrrrrrmrmrmrmooow'
waffles.makeSound()

// проверим является ли mark котом
console.log('Is mark a cat?',
  cat.isPrototypeOf(mark));

// !Важно в примерах мы использовали setPrototypeOf что плохо в реальной жизни!
// для создания приложений нужно использовать Object.create
// для понятности напишем objectCreate сами

function objectCreate(proto) { //
  const obj = {} // создает новый объект
  Object.setPrototypeOf(obj, proto) // уст. прототипом этого нового объекта proto
  return obj // возвращает obj
}

const mila = objectCreate(cat).init('Miauaua')
mila.makeSound()
