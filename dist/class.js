"use strict";
class Person {
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
}
// name: string;
// private age: number;
// constructor(initName: string, initAge: number) {
//   this.name = initName;
//   this.age = initAge;
// }
Person.species = 'Homo sapiens';
class Teacher extends Person {
    get subject() {
        if (!this._subject) {
            throw new Error('there is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw Error('there is no subject.');
        }
        this._subject = value;
    }
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
        super.greeting();
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
}
console.log(Person.isAdult(29));
// const teacher = new Teacher('Quill', 30, 'Math');
// teacher.greeting();
// let person2: Person;
// const quill = new Person('Quill', 38);
// quill.greeting();
//下はthisのお話
// const anotherQuill = {
//   name: 'anotherQuill',
//   greeting: quill.greeting
// }
// anotherQuill.greeting();
