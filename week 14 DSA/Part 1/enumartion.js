{
  {
    const fruits = [1, 2, 5, 3, 0, 2, 7, 8];
    // fruits.forEach((value, index, array) => {
    //   console.log(`${value} at ${index} of aray ${array}`);
    // });
    const filtered = fruits.filter((value) => value < 5);

    const sumNms = fruits
      .filter((value) => value < 5)
      .reduce((acc, prev) => acc + prev, 0);
    console.log(sumNms);

    const newarr = fruits.map((value) => {
      return {
        id: new Date().getTime(),
        value,
      };
    });

    console.log(filtered);

    console.log(newarr);
  }
}
