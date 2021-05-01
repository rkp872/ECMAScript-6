//passing function as parameter
let numbers = [2, 5, 6, 10, 35];
let fives = [];

numbers.forEach((v) => {
  if (v % 5 === 0) fives.push(v);
});
console.log("Numbers : " + numbers);
console.log("Fives : " + fives);
