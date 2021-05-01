//Spread operator : Spreading of element of an iterable collection
//Iterable Collection : array, string etc

function myFun(x, y, z) {
  console.log("x : " + x + " y : " + y + " z : " + z);
}

var args = [0, 1, 3];
myFun(...args);

var parts = ["shoulders", "knees"];
var wholeBody = ["head", ...parts, "toes"];

for (let i in wholeBody) {
  console.log(wholeBody[i]);
}
