const win = (winnerData) => {
  for (var i = 0; i < highscores.length; i++) {
    if (highscores[i].time.sec < winnerData.sec) continue;
    if (
      highscores[i].time.sec == winnerData.sec &&
      highscores[i].time.ms <= winnerData.ms
    )
      continue;
    for (let j = highscores.length - 1; j >= i; j--) {
      console.log(highscores[j].place);
      console.log(highscores[j].time);
      if (j == 0) continue;
      highscores[j].time.sec = highscores[j - 1].time.sec;
      highscores[j].time.ms = highscores[j - 1].time.ms;
    }
    highscores[i].time.sec = winnerData.sec;
    highscores[i].time.ms = winnerData.ms;
    break;
  }
  updateScores();
};
