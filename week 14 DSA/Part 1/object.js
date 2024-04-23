{
  {
    const products = {
      price: "99.99",
      procuctName: "Laptop",
      get name() {
        return this.procuctName;
      },
    };

    console.log(products.name);
  }
}
