//REST PArameter

function funI(x, y, ...a) {
  return (x + y) * a.length;
}

console.log(funI(1, 2, "Hello", true, 5) == 9);
console.log(funI(1, 2, "Hello", true, 5, 12) == 9);
