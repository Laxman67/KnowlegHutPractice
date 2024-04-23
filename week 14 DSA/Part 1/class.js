{
  {
    class Product {
      constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = new Date().getTime();
      }

      getDetails() {
        return {
          id: this.id,
          name: this.name,
          price: this.price,
        };
      }
    }

    let Shoe = new Product("Nike Shoes", 12.3);

    let Shoe_Details = Shoe.getDetails();

    console.log(Shoe_Details);
  }
}
