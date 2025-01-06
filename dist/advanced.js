"use strict";
var _a, _b, _c;
//interface EngineerBlogger extends Engineer, Blogger { }
const quill = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000,
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    else {
        return x;
    }
}
const upperHello = toUpperCase('Hello');
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
const input = document.getElementById('input'); //型アサーション
input.value = 'initial input value';
const designer = {
    name: 'Quill',
};
const downloadedData = {
    id: 1
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first); //optional chaining
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
