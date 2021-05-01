// function Person() {
//   var that = this;
//   that.age = 0;
//   setInterval(function growUp() {
//     that.age++;
//     console.log(that.age);
//   }, 1000);
// }
// let person = new Person();
// console.log(person.age);

function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}
let person = new Person();
console.log(person.age);
