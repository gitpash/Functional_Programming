// метод reduce это мультитул, функция принимает два параметра(start.point, value)
// можно думать о них как о стартовой точке и значению.
var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

var totalAmount = orders.reduce(function (sum, order) {
  //console.log(sum); //посмотреть что в sum
  return sum + order.amount
}, 0)
// ECMA6 same code
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
console.log(totalAmount);

var fs = require('fs')
var output = fs.readFileSync('data.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.split('\t'))
  .reduce((customers, line)  => {
    //console.log('hello', line); //смотрим что в line
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})
console.log('output', JSON.stringify(output, null, 2));
