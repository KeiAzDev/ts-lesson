function copy<T extends {name: string}, U extends keyof T>(value: T, key: U): T {
  value[key];
  return value;
}
console.log(copy({name: 'Quill', age: 38}, 'name'));

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());

interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id:3,
  data: [42]
}

interface Todo {
  title: string;
  text: string;
}

type Todoable = Partial<Todo>
type ReadToddo = Readonly<Todo>

const fetchData = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve('hello');
  }, 3000);
})
fetchData.then(data => {
  data.toUpperCase();
})
const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];

interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let tmp: ResponseData;

interface Vegetables {
  readonly tomato: string;
  pumpkin?: string;
}
let veges: keyof Vegetables;
type MappedTypes = {
  [P in keyof Vegetables]: string
}