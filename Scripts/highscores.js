const scores = document.querySelectorAll(domClass.scoreHolder);
const close = document.querySelector(domId.closeButton);
const scoreBoard = document.querySelector(domId.highScoreContainer);
const scoreButton = document.querySelector(domId.showHighScores);
close.addEventListener(onCLick, () => scoreBoard.classList.add(domClass.hide));
scoreButton.addEventListener(onCLick, () =>
  scoreBoard.classList.remove(domClass.hide)
);
const updateScores = () => {
  for (let i = 0; i < scores.length; i++) {
    scores[i].querySelector(
      domId.scoreIndex
    ).innerText = `${highscores[i].place}.`;
    scores[i].querySelector(domId.scoreName).innerText = highscores[i].name;
    scores[i].querySelector(domId.scoreTime).innerText =
      highscores[i].time.sec + timeSeperator + highscores[i].time.ms;
  }
  i = 0;
};
