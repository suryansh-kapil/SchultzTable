const shuffleColors = () => {
  //shuffling colors
  colors.sort(() => Math.random() - 0.5);
  //enabling switching through tab
  var i = 0;
  cubes.forEach((cube) => {
    cube.style.setProperty(cubeColor, `${colors[i++]}`);
  });
  i = 0;
  buttons.forEach((button) => {
    button.style.setProperty(cubeColor, `${colors[i++]}`);
  });
};
