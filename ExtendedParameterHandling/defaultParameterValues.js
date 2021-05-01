// es5

function foo(x, y, z) {
  if (x === undefined) x = 0;
  if (y === undefined) y = 0;
  if (z === undefined) z = 0;
  return x + y + z;
}
console.log(foo(5, 3)); //NaN

function foo(x, y = 20, z = 10) {
  return x + y + z;
}
console.log(foo(3));
console.log(foo(5, 3));
console.log(foo(5, 3, 10));
