function level3() {
  throw new Error("Something went wrong in level3!");
}

function level2() {
  level3(); // error thrown here will propagate up
}

function level1() {
  try {
    level2();
  } catch (err) {
    console.log("Caught error in level1:", err.message);
  }
}

level1();
