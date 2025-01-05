"use strict";
// import axions from 'axios';
// let hello: string = 'hello';
// console.log(hello);
// function add(a: number, b: number): number {
//   return a + b;
// }
let hasValue = true;
let count = 12;
let float = 3.12;
let negative = -0.23;
let single = 'aa';
//冗長になるので基本的にこのタイプをつけずに型推論で書くことが望ましい
const person = {
    name: 'Jack',
    age: 21,
};
console.log(person.name);
const fruits = ['apple', 'banana', 'grape'];
const book = ['business', 1200, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
//anyを使うとjsの世界へ戻る
let anything = true;
anything = 'hello';
anything = ['aaaa', 213, false];
anything = 12321;
let unionType = 10;
unionType = 'hello';
unionType.toUpperCase();
let unionTypes = [21, 'hello'];
const apple = 'apple'; //literal型 number,booleanでも一緒
let clothSize = 'large'; //enumっぽい
//enumはデータも作るために基本はこちらの方がいい
const cloth = {
    color: 'white',
    size: 'large'
};
function add(num1, num2) {
    return num1 + num2;
}
//never何も返さないという型
function error(message) {
    throw new Error(message);
}
