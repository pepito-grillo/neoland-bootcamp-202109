console.log('> spread operator')

var vehicle = { name: 'Ford xxx', year: 1679, isFav: false }
var newVehicle = { ...vehicle, isFav: !vehicle.isFav }

console.log(vehicle) //{name: 'Ford xxx', year: 1679, isFav: false}
console.log(newVehicle) //{name: 'Ford xxx', year: 1679, isFav: true}

var nums = [1, 2, 3, 4]
var newNums = [...nums, 5]

console.log(nums) //[1, 2, 3, 4]
console.log(newNums) //[1, 2, 3, 4, 5]