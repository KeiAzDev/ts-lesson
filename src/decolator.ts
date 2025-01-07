function Logging(constructor: Function) {
  console.log('Logging...');
}
//classを定義する際に実行されているもの
@Logging
class User {
  name = 'Quill';
  constructor() {
    console.log('User was created');
  }
}