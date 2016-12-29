const cat = {
  init: function (sound) {
    this.sound = sound
    return this
  },
    makeSound: function () {
      console.log(this.sound);
    }
}

// function objectCreate(proto) {  // создает новый объект
//   const obj = {} // ≤ - этот
//   Object.setPrototypeOf(obj, proto) // с прототипом установленным
//   return obj            // нв этот объект(proto)
// }


const mark = Object.create(cat)
mark.init = ('meeeeowwww')
mark.makeSound()

const waffles =
  Object.create(cat).init('Mrrrrrrrr')
waffles.makeSound()

console.log('is mark a cat?',
cat.isPrototypeOf(mark));
