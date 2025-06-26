function checkNumberSign(number) {
  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    const result =
      number === 0 ? "The number is zero." :
      number > 0 ? `${number} is positive.` : `${number} is negative.`;

    console.log(result);
  }
}

checkNumberSign(7);