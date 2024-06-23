btn_start.addEventListener(`click`, () => {
  main_page.classList.remove(`restart`);
  main_page.classList.add(`start`);
  main_page.classList.remove(`initial-state__main`);

  // Load game
  game_container.classList.remove(`initial-state`);
  game_container.classList.add(`load-game`);
});

btn_exit.addEventListener(`click`, () => {
  game_container.classList.remove(`load-game`);
  game_container.classList.add(`initial-state`);
  scores.forEach((score) => {
    score.textContent = `0`;
  });
  main_page.classList.remove(`start`);
  main_page.classList.add(`restart`);
});
