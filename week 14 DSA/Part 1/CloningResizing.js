{
  {
    const fruits = ["Apple", "orange", "banana", "kiwi"];

    const fruits1 = [...fruits];
    console.log(fruits1);

    const fruits2 = fruits.slice(1, 3);
    console.log(fruits2);

    const fruits3 = [].concat(fruits);
    console.log(fruits3);

    const fruits4 = Array.from(fruits);
    console.log(fruits4);

    const fruits5 = Array.of(1, 2, 3, 8);
    delete fruits5[0];
    console.log(fruits5);
  }
}
