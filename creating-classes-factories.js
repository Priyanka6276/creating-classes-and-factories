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
        console.log(this.price)
    }
}

const Hamtaro = new Hamster('Hamtaro')

console.log(Hamtaro)