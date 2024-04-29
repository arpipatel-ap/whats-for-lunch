
function whatToDoForLunch(hungry, availableTime) {

  if (hungry) {
    if (availableTime < 20) {
      console.log("You have less than 20 minutes, grab a quick snack orsomething you have ready at home.");
    } else if (availableTime >= 20 && availableTime <= 30) {
      console.log("You have between 20 and 30 minutes, you deserve a break! Take time to cook a tasty meal.");
    } else {
      console.log("You have more than 30 minutes. This is an intense program, reconsider your priorities.");
    }
  } else {
    console.log("You're not hungry, keep up the good work!");
  }
}
whatToDoForLunch(true, 10);