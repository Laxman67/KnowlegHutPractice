{
  {
    {
      let fruits = [
        "banana",
        "mango",
        "orange",
        "grapes",
        "mango",
        "kiwi",
        "banana",
        "pine-apple",
      ];

      let removedDuplicates = (arr) => {
        let newArr = [];
        arr.forEach((element) => {
          if (!newArr.includes(element)) {
            newArr.push(element);
          }
        });

        return newArr;
      };

      console.log(removedDuplicates(fruits));
    }
  }
}
