function add(a) {
  return function (b) {
    if (b !== undefined) {
      return add (a+b)
    }
    return a;

  }
}


console.log(add(5)(2)(20)());
