//Завдання 1 +
function yourName(callback){
    const name = prompt(`Назовіть себе, мій друже:`);
    callback(name);
}

function greetings(name) {
    console.log('Радий вас вітати, ' + name + '!');
}

setTimeout(console.log(`\n. . .\n`), 3000, yourName(greetings));

//Завдання 2 +
const car = {
    name: 'lol',
    showDetails: function() {
        setTimeout(() => {
            console.log('Ось вам всі деталі!');
        }, 3000, this.name);
    }  
};

car.showDetails();

//Завдання 3 +
const result = (a, b) => a * b;

console.log(result(20, 20));

//Завдання 4 +
function sum(...arguments) {
    return arguments.reduce((acc, val) => acc + val, 0);
}

const numbers = [1, 2, 3, 10, 5];
console.log(sum.apply(null, numbers));

//Завдання 5 +

const object = {
    name: 'Bob',
    print: function(name) {
        console.log(`always print, ${name}nnn! ${this.name} - work!`);
    }
};

const alwaysPrintJohn = object.print.bind(object);

alwaysPrintJohn(`Joh`);

//Завдання 6 +
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = { name: 'Charlie' };
greet.call(person, 'Hey');