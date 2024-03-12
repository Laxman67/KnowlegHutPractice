{
  {
    const mixedArr = [1, 2, "Laxman", true, false, null, {}, [], () => {}];

    const array = {
      number: 0,
      string: 0,
      object: 0,
      boolean: 0,
      function: 0,
    };

    let x = mixedArr.map((elem) => {
      switch (typeof elem) {
        case "number":
          array.number += 1;
          break;
        case "string":
          array.string += 1;
          break;
        case "object":
          array.object += 1;
          break;
        case "boolean":
          array.boolean += 1;
          break;
        case "function":
          array.function += 1;
          break;
      }

      return array;
    });

    console.log(x[0]);
  }
}
