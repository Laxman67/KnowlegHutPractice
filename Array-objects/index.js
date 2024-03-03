let numbers = [];

do {
  console.log(
    `Choose an option : \n1. Add a number \n2. Remove a number \n3. Print the numbers \n4. Exit`
  );

  choice = parseInt(prompt("Enter a Choice you want to Perform"));

  switch (choice) {
    case 1:
      let numberToAdd = prompt("Enter a number to add into an Array :");
      numbers.push(numberToAdd);
      console.log(numbers);
      break;

    case 2:
      let numberToRemove = prompt("Enter number to remove from an array");

      let index = numbers.indexOf(numberToRemove);
      if (index !== -1) {
        numbers.splice(index, 1);
        console.log(numbers);
      } else {
        console.log("No such value found");
      }

      break;
    case 3:
      for (const number of numbers) {
        console.log(number);
      }
      break;
    case 4:
      choice = false;
      console.log("Thanks for Stopping");
      break;
    default:
      console.log("Enter a valid Option");
  }
} while (choice >= 1 && choice <= 4);
