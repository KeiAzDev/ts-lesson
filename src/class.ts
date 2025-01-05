abstract class Person {

  // name: string;
  // private age: number;

  // constructor(initName: string, initAge: number) {
  //   this.name = initName;
  //   this.age = initAge;
  // }

  static species = 'Homo sapiens';
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
  constructor(public name: string, protected age: number) {

  }

  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  }
  abstract explainJob(): void;
}

class Teacher extends Person {
  explainJob() {
    console.log(`I am a teacher and I teach ${this.subject}`);
  }
  get subject(): string {
    if(!this._subject) {
      throw new Error('there is no subject.')
    }
    return this._subject;
  }
  set subject(value) {
    if(!value) {
      throw Error('there is no subject.');
    }
    this._subject = value;
  }
  constructor(name: string, age: number, public _subject: string) {
    super(name, age);
    super.greeting();
  }
}
const teacher = new Teacher('Quill', 38, 'Math');
teacher.greeting();




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