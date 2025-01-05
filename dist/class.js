"use strict";
class Person {
    // name: string;
    // private age: number;
    // constructor(initName: string, initAge: number) {
    //   this.name = initName;
    //   this.age = initAge;
    // }
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
let person2;
const quill = new Person('Quill', 38);
quill.greeting();
//下はthisのお話
// const anotherQuill = {
//   name: 'anotherQuill',
//   greeting: quill.greeting
// }
// anotherQuill.greeting();
