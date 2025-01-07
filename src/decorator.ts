//decolatorファクトリー
function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
  };
}

function Component(template: string, selector: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log('compo');
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log('propertyLogging');
  console.log(target);
  console.log(propertyKey);
}
function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('MethodLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}
function AccessorLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('AccessorLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

//classを定義する際に実行されているもの
@Component("<h1>{{name}}</h1>", "#app")
@Logging("Logging User")
class User {
  @PropertyLogging
  name = "Quill";
  constructor(public _age: number) {
    console.log("User was created");
  }
  @AccessorLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  @MethodLogging
  greeting() {
    console.log('hello');
  }
}

const user1 = new User(32);
