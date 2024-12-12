// Code your solutions in this file

  writeCards(cards);

  function writeCards(names, event) {
    const messages = []; 
    for (let i = 0; i < names.length; i++) { 

      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages; 
  }
  

  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

  let countdown = 10;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
 
function countDown(number) {
    while (number >= 0) { 
      console.log(number); 
      number--; 
    }
  }
  
  