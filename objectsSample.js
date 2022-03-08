let person = {
    firstName: 'Marty',
    lastName: 'McFly',
    age: 17

}
/*
for(key in person) {
    console.log(key);
}

for(key in person) {
    console.log(person[key]);
}
*/
person.vehicle = 'Toyota sr5';

person.parents = ['George', 'Lorraine'];
delete person.vehicle;
console.log(person);

// console.log(person.firstName);
// console.log(person['firstName']);

let meal = {
    appetizer: 'Mozzarella Sticks',
    entree: 'Lasagna',
    dessert: 'Chocolate cake',
    drink: 'water'
}

const {appetizer} = meal;

const {entree, dessert} = meal;


const {drink: myFavoriteDrink} = meal;

class Dog {
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
    }
    greeting() {
        console.log(`Hi my name is ${this.name} and I am a(n) ${this.age} year old ${this.breed}.`);
    }
}



let lassie = new Dog("Lassie","Collie", 18);
let scoobyDoo = new Dog('Scooby Doo', 'Great Dane', 4);

scoobyDoo.greeting();

console.log(lassie);
console.log(scoobyDoo);

class Puppy extends Dog {
    constructor(name, breed, trainingLevel) {
        super(name, breed);

        this.trainingLevel = trainingLevel;
    }

    levelUp(num) {
        this.trainingLevel += num;
    }
}

let scrappyDoo = new Puppy('ScrappyDoo', 'Great Dane', 4);
scrappyDoo.levelUp(.5);
scrappyDoo.levelUp(2);
console.log(scrappyDoo);