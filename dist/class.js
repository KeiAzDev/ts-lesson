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
        this.explainJob();
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
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }
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
    //singletonパターンはコンストラクターにprivvateをつけてstaticで初期化してさらにgetで呼び出す
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
        super.greeting();
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
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
