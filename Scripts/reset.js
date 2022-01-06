const reset = () => {
  shuffleNumbers();
  shuffleColors();
  cubeList.lastCube = null;
  clearInterval(time.control);
  startClock();
  win({ sec: 59, ms: 99, name: "player" });
};
reset();
