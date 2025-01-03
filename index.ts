// import axions from 'axios';


// let hello: string = 'hello';
// console.log(hello);

// function add(a: number, b: number): number {
//   return a + b;
// }

let hasValue: boolean = true;
let count: number = 12;
let float = 3.12;
let negative = -0.23;
let single: string = 'aa';
//冗長になるので基本的にこのタイプをつけずに型推論で書くことが望ましい

const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21,
}
console.log(person.name);

const fruits = ['apple', 'banana', 'grape'];

const book: [string, number, boolean] = ['business', 1200, false];

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
