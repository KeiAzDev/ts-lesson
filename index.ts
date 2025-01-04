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

//anyを使うとjsの世界へ戻る
let anything: any = true;
anything = 'hello';
anything = ['aaaa', 213, false];
anything = 12321;

let unionType: number | string = 10;

unionType = 'hello';
unionType.toUpperCase();

let unionTypes: (number|string)[] = [21, 'hello'];

const apple: 'apple' = 'apple'; //literal型 number,booleanでも一緒
//tsの仕様でconstでは常にこうなります

type ClothSize = 'small' | 'medium' | 'large'
let clothSize: ClothSize = 'large';//enumっぽい
//enumはデータも作るために基本はこちらの方がいい
const cloth: {
  color: string,
  size: ClothSize,
} = {
  color: 'white',
  size: 'large'
}