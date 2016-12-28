const cat = {
  makeSound: function () {
    console.log(this.sound)
  }
}

const mark = Object.create(cat)
mark.sound = 'meeeeowwww'
mark.makeSound()

const waffles = Object.create(cat)
waffles.sound = 'Mrrrrrrrr'
waffles.makeSound()
