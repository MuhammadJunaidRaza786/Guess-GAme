let targetNum = Math.floor(Math.random() * 10) + 1;

let userInp = parseInt(prompt("Guess the number"));

while (userInp !== targetNum) {
  targetNum = Math.floor(Math.random() * 10) + 1;

  console.log(userInp);
  console.log(targetNum);

  
  if (!userInp) {
    alert("Invalid Input")
}
  userInp = parseInt(prompt("Wrong Guess !! , Again Guess the Number"));

  if (userInp === targetNum) {
    alert("You won the Game");
    break;
  }

  
}







// if (!userInp) {
//   alert("invalid input");
// }
// while (userInp != targetNum) {
//   userInp = parseInt(prompt("Wrong Guess the number again"));
//   if (userInp === targetNum) {
//     alert("congrats you win a Rooh afza");
//     break;
//   }
//   console.log(userInp, targetNum);
// }
