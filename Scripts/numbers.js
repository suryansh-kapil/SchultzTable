// reset function
const shuffleNumbers = () => {
  cubes.forEach((cube) => cube.classList.remove("selected"));
  numbers.sort(() => Math.random() - 0.5);
  for (var i = 1; i < 26; i++) {
    const curCubeTextContainer = document.querySelector(
      `#cube-${i}` + " .contents"
    );
    const curCubeTextContainer2 = document.querySelector(
      `#cube-${i}` + " .container"
    );
    curCubeTextContainer.innerText = `${numbers[i - 1]}`;
    curCubeTextContainer2.innerText = `${numbers[i - 1]}`;
  }
};
// selecting all cubes
var cubes = document.querySelectorAll(domClass.cube);
var buttons = document.querySelectorAll(domClass.button);

// adding onclick listener
var i = 0;
cubes.forEach((cube) => {
  cube.addEventListener(onCLick, () =>
    cube.classList.toggle(domClass.toggleSelect)
  );
});
shuffleNumbers();

function fetchHighScores() {}
