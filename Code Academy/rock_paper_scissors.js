
//code academy rock, paper, scissors game ---> practice implimentation
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput
    }
    else{
      console.log('Error!');
    }
  };
  
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb'){
      return 'Youre bombin!';
    }
    if (userChoice === computerChoice){
      return 'Result is a tie';
    }
    if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer won!';
      }
      else {
        return 'You win!'
       }
    }
    if (userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer won!';
      }
      else {
        return 'You win!'
       }
    }
    if (userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Computer won!';
      }
      else {
        return 'You win!'
       }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  
  