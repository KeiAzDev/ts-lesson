//decolatorファクトリー
function Logging(message: string){
  return function(constructor: Function) {
    console.log(message);
  }
}

//classを定義する際に実行されているもの
@Logging('Logging User')
class User {
  name = 'Quill';
  constructor() {
    console.log('User was created');
  }
}