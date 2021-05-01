// //local variable always have function level scope.

// function foo()
// {
//   for (var i = 1; i <= 5; i++) //varible i defined inside the loop(block) but still it will have scope in the complete function .
//   {
//     console.log("Inside i : " + i);
//   }
//   console.log("Outside i : " + i); //we can access i outside the block also even if it is defined inside the block
// }

// foo();

function foo() {
  var i = 29;
  (function () {
    for (var i = 1; i <= 5; i++) {
      console.log("Inside i : " + i);
    }
  })();
  console.log("Outside i : " + i);
}

foo();

function foo() {
  let i = 10; //variable i has function level scope as it is defined inside a function
  for (let i = 1;i <= 5;i++) //varible i defined inside the loop(block) so it has block level scope .
   {
    console.log("Inside i : " + i);
  }
  console.log("Outside i : " + i); //we can access function level i here but not block level i
}

foo();

// function bar() {
//   let i = 10;
//   console.log("i : " + i);
//   {
//     let i = 7;
//     console.log("i : " + i);
//   }
//   console.log("i : " + i);
// }

// bar();

//scope of const is same as let and it cannot be changed.
function bar() {
  const i = 10;
  console.log("i : " + i);
  {
    const i = 7;
    console.log("i : " + i);
  }
  console.log("i : " + i);
}

bar();
