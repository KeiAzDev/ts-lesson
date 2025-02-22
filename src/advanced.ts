//interfaceでも問題なし
type Engineer = {
  name: string;
  role: string;
}
type Blogger = {
  name: string;
  follower: number;
}
type EngineerBlogger = Engineer & Blogger;
//interface EngineerBlogger extends Engineer, Blogger { }
const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000,
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string;//関数のオーバーロード
function toUpperCase(x: number): number;//関数のオーバーロード
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  } else {
    return x;
  }
}
const upperHello = toUpperCase('Hello');


type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}
class Dog {
  kind: 'dog' = 'dog';
  speak() {
    console.log('bow-wow');
  }
}
class Bird {
  kind: 'bird' = 'bird';
  speak() {
    console.log('tweet-tweet');
  }
  fly() {
    console.log('flutter');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
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

const input = document.getElementById('input') as HTMLInputElement;//型アサーション
input.value = 'initial input value';

interface Designer {
  name: string;
  [index: string]: string;//これがindex signature
}
const designer: Designer = {
  name: 'Quill',
}
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}

const downloadedData: DownloadedData = {
  id: 1
}

console.log(downloadedData.user?.name?.first);//optional chaining
const userData = downloadedData.user ?? 'no-user';
type id = DownloadedData['id']

let target: string = 'hello'
let source: 'hello' = 'hello'
target = source;