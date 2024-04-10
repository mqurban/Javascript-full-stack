// function greet() {
//     // alert('Hello There');
// }

// greet();

// let catName = "Fluffy";

// let catAge = 4;

// function meow () {

//     alert("Meooowww")

// }

// meow();


// let cat = {

//     name : "Fluffy",
//     age  : 4,

//     foods: {
//         favourite: "Tuna",
//         leastFavourite : "Oranges"
//     },

//     eyeColor : "blue",
//     meow() {
//         alert("Meoww")
//     }
    
// }

// cat.meow()
// alert(cat.eyeColor);
// alert(cat.foods.favourite);


// document.addEventListener("click", myAmazinfunction);

// function myAmazinfunction() {
//     alert("hello there")
// }

// let myWords = ["red", "orange", "yellow"];
// let myPets = [{name:"meosalot", species:"cat"}, {name:"Barskalot", species: "dog"}];
// let myfavouriteNumber = [9, 2, 8, 3, 7, 4]
// myWords.push("green")

// console.log(myWords)


// console.log(myPets[0])


// let myName = "Qurban"

// console.log(myName.toUpperCase())

// let myNumber = 7.89

// console.log(myNumber.toFixed())


// myWords.splice(0, 1)

// console.log(myWords)

// console.log(myfavouriteNumber[2])

// console.log(myPets[1].species)


// let strawberryCount = 9


// if( strawberryCount > 10 ){

//     document.write("Congrats")

// }
// else{

//     document.write("Sorry we do not ship orders that small.")

// }

// let testvalue = true

// document.addEventListener("click", ouramazingfunction)

// function ouramazingfunction() {
//     alert("Thank you for click");
// }


// function doubleMe(x) {
//     return 2*x
// }

// document.write(doubleMe(3))

// function trippleMe(x){
//     return 3 * x
// }

// function quadrupleMe(x){
//     return 4 * x
// }


//// higher order functions 

// function createMultiplier(multiplier){
//     return function(x){
//         return x * multiplier
//     }
// }


// let doubleMe = createMultiplier(2)
// let trippleMe = createMultiplier(3)
// let quadrupleMe = createMultiplier(4)


// document.write(doubleMe(10))
// document.write(trippleMe(10))
// document.write(quadrupleMe(10))


// let myColors = ['red', 'oranage', 'yellow']

// myColors.forEach(saySomethingNice)


// function saySomethingNice(color) {

//     document.write(color + "<br>")
// }


// myColors.map()
// myColors.filter()


// let pets = [

//     {name: "Meowsalot", species: "cat", age: 2}, 
//     {name: "Barksalot", species: "dog", age: 2}, 
//     {name: "Purrslour", species: "cat", age: 8}, 

// ]

// console.log(pets.push({name : "Puppster", species :"dog", age: 1}))

// // console.log(pets)

// let ourTest = pets.map(nameOnly)

// function nameOnly(x) {

//     return x.name
// }

// console.log(ourTest)

// let dogs = pets.filter(onlyDogs)

// function onlyDogs(x) {
//     return x.species == "dog"
// }

// // console.log(dogs)

// function onlyBabies(x) {
//     return x.age < 3
// }

// let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly)

// console.log(babyDogNames)


// let john = {
//     firstName: "John", 
//     lastName: "Doe", 
//     driveCar() {
//         let imAFunctionNotAMethod = () => console.log(this)
//         imAFunctionNotAMethod()
//         console.log(this.firstName + " " + this.lastName)
//     }
// }

// john.driveCar()

// function breathe() {

//     console.log(this.firstName + " " + this.lastName + " just inhaled and exhaled")

// }

// breathe.call(john)

// document.addEventListener("click", () => alert("thank you") )


// cool()

// function cool() {
//     console.log("This is uper cool.")
// }

// console.log(strawberryCount)

// let strawberryCount = 100


// let cool = function () {
//     console.log("hey")
// }


// let name1 = "Qurban"; console.log(name1)

