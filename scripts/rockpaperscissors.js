function getComputerChoice() {
  let computerChoiceChoice = Math.round(Math.random() * 2);

  switch (computerChoiceChoice) {
    case 0:
      return `rock`;
    case 1:
      return `paper`;
    case 2:
      return `scissors`;
  }
}

function showWinner(winner, loser, winnerChoice, loserChoice, isTie = false) {
  let text_winner = win_wrapper.querySelector(`#winner`);
  let text_loser = win_wrapper.querySelector(`#loser`);
  let choice_winner = win_wrapper.querySelector(`#winner-choice`);
  let btn_continue = win_wrapper.querySelector(`button`);

  if (humanScore === 5 || computerScore === 5) {
    text_winner.textContent = `${winner} wins!`;
    btn_continue.textContent = `Congratulations!`;
    humanScore = 0,
    computerScore = 0;
    btn_continue.addEventListener(`click`, () => {
      win_wrapper.classList.remove(`active`);
      btn_continue.textContent = `Next Round!`;
      game_container.classList.remove(`load-game`);
      game_container.classList.add(`initial-state`);
      scores.forEach((score) => {
        score.textContent = `0`;
      });
      main_page.classList.remove(`start`);
      main_page.classList.add(`restart`);
    });
    win_wrapper.classList.add(`active`);

    return;
  }

  if (isTie) {
    text_winner.textContent = `It's a tie!`;
  } else {
    text_winner.textContent = `${winner} wins!`;
  }

  choice_winner.textContent = `${winner} chose: ${winnerChoice}`;
  text_loser.textContent = `${loser} chose: ${loserChoice}`;
  btn_continue.addEventListener(`click`, () => {
    win_wrapper.classList.remove(`active`);
  });

  win_wrapper.classList.add(`active`);
}

function playGame(humanChoice) {
  let playerChoice = humanChoice;
  let computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    console.log(
      `Player: ${playerChoice} || Computer ${computerChoice}\nIt's a tie!`
    );
    showWinner(`Player`, `Computer`, playerChoice, computerChoice, true);
  } else if (
    (playerChoice === `rock` && computerChoice === `scissors`) ||
    (playerChoice === `scissors` && computerChoice === `paper`) ||
    (playerChoice === `paper` && computerChoice === `rock`)
  ) {
    console.log(
      `Player: ${playerChoice} || Computer ${computerChoice}\nPlayer Wins!`
    );
    humanScore++;
    scores.forEach((score) => {
      if (score.id === "player") {
        score.textContent = humanScore;
      }
    });
    showWinner(`Player`, `Computer`, playerChoice, computerChoice);
  } else {
    console.log(
      `PlayerChoice: ${playerChoice} || ComputerChoice ${computerChoice}\nComputerChoice Wins!`
    );
    computerScore++;
    scores.forEach((score) => {
      if (score.id === "computer") {
        score.textContent = computerScore;
      }
    });
    showWinner(`Computer`, `Player`, computerChoice, playerChoice);
  }
}

let humanScore = 0;
let computerScore = 0;

choice.forEach((item) => {
  item.addEventListener("click", () => {
    let humanChoice = item.id;
    playGame(humanChoice);
  });
});
