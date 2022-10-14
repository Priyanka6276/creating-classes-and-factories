//==============================Hamster==================================

class Hamster {
    constructor(nameParam) {
        this.owner = "";
        this.name = nameParam;
        this.price = 15
    }
    wheelRun(){
        console.log('squeak squeak')
    }
    eatFood(){
        console.log('nibble nibble')
    }
    getPrice(){
        return this.price
    }
}

// const hamster1 = new Hamster ('Hamtaro')
// console.log(hamster1)

class Person {
    constructor(nameParam){
        this.name = nameParam;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName(){
        console.log(this.name)
    }
    getAge(){
        console.log(this.age)
    }
    getWeight(){
        console.log(this.weight)
    }
    greet(){
        console.log(`${this.name} says greetings.`)
    }
    eat(){
        this.weight++, 
        this.mood++
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++,
        this.height++,
        this.weight++,
        this.mood--,
        this.bankAccount+=10
    }
    buyHamter(hamster){
        this.hamsters.push(hamster),
        this.mood+=10
        this.bankAccount -= hamster.getPrice()
    }
}

// const person1 = new Person('priyanka')
// person1.eat()
// person1.exercise()
// person1.ageUp()
// person1.ageUp()
// console.log(person1)
// person1.buyHamter(hamster1)
// console.log(person1)

const tim = new Person ('Timmy')

tim.ageUp() 
tim.ageUp() 
tim.ageUp()
tim.ageUp()
tim.ageUp()

tim.eat()
tim.eat()
tim.eat()
tim.eat()
tim.eat()

tim.exercise()
tim.exercise()
tim.exercise()
tim.exercise()
tim.exercise()

tim.ageUp() 
tim.ageUp() 
tim.ageUp()
tim.ageUp()
tim.ageUp()
tim.ageUp() 
tim.ageUp()
tim.ageUp()
tim.ageUp()

const gus = new Hamster('Gus')

gus.owner = "Timmy"

tim.buyHamter(gus)

tim.ageUp() 
tim.ageUp() 
tim.ageUp()
tim.ageUp()
tim.ageUp()
tim.ageUp() 
tim.ageUp()
tim.ageUp()
tim.ageUp()
tim.ageUp()
tim.ageUp()
tim.ageUp() 
tim.ageUp()
tim.ageUp()
tim.ageUp()

tim.eat()
tim.eat()

tim.exercise()
tim.exercise()

console.log(tim)




//==============================CHEF MAKES DINNER ============================

class Dinner {
    constructor(appetizerParam, entreeParam, dessertParam){
        this.appetizer = appetizerParam;
        this.entree = entreeParam;
        this.dessert = dessertParam;
    }
}

class Chef {
    constructor(){
        this.dinner = []
    }
    makeDinner(appetizer,entree,dessert){
        const newDinner = new Dinner (appetizer,entree,dessert)
        this.dinner.push(newDinner)
    }
}

const chef1 = new Chef ()

chef1.makeDinner('calimari','pizza', 'chocolate cake')

console.log(chef1)