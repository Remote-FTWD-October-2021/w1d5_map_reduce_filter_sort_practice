
// NOMBRES
// Nacho
// Santi 
// Federico Gómez
// Guillem
//Federico Altava
//Aarón
// Nando 🐼
//Tatiana
//Raquel
//Jose Gutierrez
//Fernando









//.sort()




// for(let i = 0; i < animals.length; i++){
//   console.log(animals[i])
// }

//.forEach()

// animals.forEach(function(item, index){
//   console.log(item)
//   console.log(index)
// })

// animals.forEach((item, index)=>{
//   console.log(item)
//   console.log(index)
// })


// .map()



// const mappedAnimals = animals.map((item)=>{
//   return item + 'x'
// })


// const mappedMyArray = myArray.map(function(item){
//   if(typeof item === 'string'){
//     return 'string'
//   } else if(typeof item === 'number'){
//     return 'number'
//   }
// })

// console.log(mappedMyArray)


// .filter()

// const myArray = ['cat', 2, 'bat', 4, 6, 'jaguar']

// const filteredArray = myArray.filter(function(item){
//   // if(typeof item === 'number'){
//   //   return true
//   // } else {
//   //   return false
//   // }
//   return item === 'number'
// })

// console.log(filteredArray)

const students = [
  {
    name: 'Tony Parker',
    firstProject: 80,
    secondProject: 75,
    finalExam: 90
  },
  {
    name: 'Marc Barchini',
    firstProject: 84,
    secondProject: 65,
    finalExam: 65
  },
  {
    name: 'Claudia Lopez',
    firstProject: 45,
    secondProject: 95,
    finalExam: 99
  },
  {
    name: 'Alvaro Briattore',
    firstProject: 82,
    secondProject: 92,
    finalExam: 70
  },
  {
    name: 'Isabel Ortega',
    firstProject: 90,
    secondProject: 32,
    finalExam: 85
  },
  {
    name: 'Francisco Martinez',
    firstProject: 90,
    secondProject: 55,
    finalExam: 78
  },
  {
    name: 'Jorge Carrillo',
    firstProject: 83,
    secondProject: 77,
    finalExam: 90
  },
  {
    name: 'Miguel López',
    firstProject: 80,
    secondProject: 75,
    finalExam: 75
  },
  {
    name: 'Carolina Perez',
    firstProject: 85,
    secondProject: 72,
    finalExam: 67
  },
  {
    name: 'Ruben Pardo',
    firstProject: 89,
    secondProject: 72,
    finalExam: 65
  }
];

const filteredStuents = students.filter(function(student){
  // console.log(student.firstProject)
  if(student.firstProject <= 80){
    return true
  } else {
    return false
  }
  // return student.firstProject <= 80
})

const mappedStudents = filteredStuents.map((student)=>{
  return student.name
})

// console.log(mappedStudents)

// .reduce()

// const numbers = [45, 23, 12, 3, 4]

// const animals = ['cat', 'dog', 'jaguar', 'horse', 'dolphin']


const things = ['cat', 45, 67, 'jaime']

//Conseguir la suma total de todos los numeros que estén dentro de things


const sumOfThings = things.reduce(function(acc, thing){
  if(typeof thing === 'number'){
    return acc + thing
  } else {
    return acc
  }
}, 0)

// PRIMERA VUELTA: acc = 0
// SEGUNDA VUELTA: acc = 45
// TERCERA VUELTA: acc = 112
// CUARTA VUELTA: acc = 112

// console.log(sumOfThings)

// const singleStringAnimals = animals.reduce(function(acc, animal){
//   return acc + animal
// }, '')

// const reducedNumbers = numbers.reduce(function(accumulator, item){
//   return accumulator + item
// }, 0)


// 0 + 45  -> 45 --> accumulator = 45
// 45 + 23 -> 68 --> accumulator = 68
// 68 + 12 -> 80 --> accumulator = 80
// 80 + 3 -> 83 --> accumulator = 83
// 83 + 4 --> 87 --> accumulator = 87



const animals = ['cat', 'dog', 'jaguar', 'horse', 'dolphin']

let newAnimals = []

for(let i = 0; i < animals.length; i++){
  if(animals[i].length > 5){
    newAnimals.push(animals[i])
  }
}

// animals.forEach(function(animal){
//   newAnimals.push(animal + 'x')
// })


// console.log(newAnimals)

// .unshift()


const numbers = [45, 23, 12, 3, 4]

let counter = 0

for(let i = 0; i < numbers.length; i++){
  counter = counter + numbers[i]
}

// console.log(counter)

const people = [
  { name: 'Candice', age: 15 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 49 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 }
];


const underagedPeople = people.reduce(function(acc, person){
  if(person.age < 18){
    return acc + 1
  } else {
    return acc
  }
}, 0)

// console.log(underagedPeople)

// let underagedPeople = 0

// people.forEach((person)=>{
//   if(person.age < 18){
//     underagedPeople++
//   }
// })



// console.log(underagedPeople)

// const underagedPeople = people.filter((person)=>{
//   return person.age < 18
// })

// console.log(underagedPeople.length)


// Quiero saber el numero de personas menores de edad





// const sumOfAges = people.reduce((acc, person)=>{
//   return acc + (person.age/people.length)
// }, 0)

// (1+1+1+1+1) / 5
// (1/5 + 1/5 + 1/5 + 1/5 + 1/5)

// console.log(sumOfAges)
// const onlyAges = people.map(function(person){
//   return person.age
// })

// const sumOfAges = onlyAges.reduce(function(acc, age){
//   return acc + age
// }, 0)

// const averageAges = sumOfAges / people.length

// console.log(averageAges)


// Quiero ver en consola la media de edad de todas las personas


const product = {
  name: 'AmazonBasics Apple Certified Lightning to USB Cable',
  price: 7.99,
  manufacturer: 'Amazon',
  reviews: [
    { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
    { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
    { user: 'David Recoba', comments: 'Awesome', rate: 5 },
    { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
    { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
  ]
};

const usersRatingMoreThan3 = product.reviews.filter((user)=>{
  return user.rate >= 3
})

// const users = []

// usersRatingMoreThan3.forEach(function(item){
//   users.push(item.user)
// })

users = usersRatingMoreThan3.map((item)=>{
  return item.user
})

// console.log(users)

//Quiero tener una lista (array) con el nombre de todos los usuario que hayan puntuado mi producto con un 3 o mas

// .sort()

// const highToLow = function(a, b){
//   if(b > a){
//     return 1
//   } else if(a > b){
//     return -1
//   }
// }

// const listOfNumbers = [true, true, false, true, false]

// listOfNumbers.sort(function(a, b){
//   if(a){
//     return -1
//   } else {
//     return 1
//   }
// })

// Ordenar primero por orden alfabetico y luego los numeros por orden ascendente


// console.log(listOfNumbers)

// a = 100
// b = 99

// const words = ['b', 'aa', 'third', 'second', 'hello', 'goodbye', 'first']

// words.sort(function(a, b){
//   if(a.length > b.length){
//     return -1
//   } else if(a.length < b.length){
//     return 1
//   }
// })

// console.log(words)

const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: 'Private Room',
    pool: true,
    garage: false
  },
  {
    title: 'Private apartment',
    price: 190,
    type: 'Entire Place',
    pool: true,
    garage: true
  },
  {
    title: 'Apartment with awesome views',
    price: 400,
    type: 'Entire Place',
    pool: false,
    garage: false
  },
  {
    title: 'Apartment in la Rambla',
    price: 150,
    type: 'Private Room',
    pool: false,
    garage: true
  },
  {
    title: 'Comfortable place in Barcelona´s center',
    price: 390,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'Room near Sagrada Familia',
    price: 170,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: 'Great house next to Camp Nou',
    price: 140,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'New apartment with 2 beds',
    price: 2000,
    type: 'Entire place',
    pool: false,
    garage: true
  },
  {
    title: 'Awesome Suite',
    price: 230,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: 'Entire place',
    pool: true,
    garage: true
  }
];

// Tener una lista (array) con todos los sitios que cuesten mas de 250 euros la noche
const filteredList = places.filter((item)=>{
  return item.price > 250
})

// console.log(filteredList)


// Quiero saber el numero de sitios que tienen piscina y garge

const filteredPlaces = places.filter((item)=>{
  return item.garage && item.pool
}).length

// 

console.log(filteredPlaces)