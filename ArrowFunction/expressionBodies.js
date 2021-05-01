//More expressive syntax

function add(x, y) {
  return x + y;
}

//arrow function

let addOne = (x, y) => x + y;

console.log(addOne(4, 9));

let addTwo = (x, y) => {
  console.log("X : " + x + " y :" + y);
  return x + y;
};


console.log(addTwo(5, 10));

console.log((() => 5)());

console.log(
  (() => {
    return 5;
  })()
);

let evens = [2, 4, 6, 8, 10];

odds = evens.map((v) => v + 1);
