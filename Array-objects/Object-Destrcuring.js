{
  {
    let ob = [
      { name: "Laxman", age: 21 },
      { name: "Rajender", age: 26 },
      { name: "Pardeep", age: 23, rating: [] },
    ];
    console.log(1);
    console.log(ob.find((book) => book.name == "Pardeep"));
    let c = ob.find((book) => book.name == "Pardeep");
    console.log(c.rating.push("Good"));
    console.log(c.rating.push("Sincere"));

    console.log(ob.find((book) => book.name == "Pardeep"));
  }
}
