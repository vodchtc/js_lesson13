//1)

function Person(name, id, age) {
    this.name = name;
    this.id = id;
    this.age = age;
}

Person.prototype.say = () => {
    console.log('Hello from prototype');
}

const person = new Person('Джонс', 1, 21);

person.say();


//2)

const nameObj = {
    name: 'Андрей'
}

const secondNameObj = {
    secondName: 'Петрович',
    __proto__: nameObj,
}

const lastNameObj = {
    lastName: 'Балалайкин',
    __proto__: secondNameObj,
}

//3)

const protoObj = {
    test: '123'
}

const lastObj = Object.create({
    privet: 'Как дела?',
    poka: 'До свидания',
})

Object.setPrototypeOf(lastObj, protoObj)

console.log(Object.getPrototypeOf(lastObj))