var cubeList = {
  lastCube: null,
  cubes: [],
};
const isEqual = (var1, var2) => {
  if (var1 == var2) return true;
};
for (let num = 1; num <= numbers.length; num++) {
  cubes.forEach((cube) => {
    if (isEqual(num, cube.querySelector(domId.cubeContents).innerText))
      return cubeList.cubes.push(cube);
  });
}
const counter = (hasEnded) => {
  if (!hasEnded) {
    cubeList.lastCube = 1;
    startClock(0, 0);
  } else clearInterval(startClock);
};

const handleClick = (cube) => {
  switch (cubeList.lastCube) {
    case null:
      {
        if (isEqual(1, cube.querySelector(domId.cubeContents).innerText)) {
          win({ sec: time.sec.value, ms: time.ms.value, name: "name" });
          return (cubeList.lastCube = 1);
        }
        reset(1, 1);
      }
      break;
    case 1:
      {
        if (isEqual(2, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 2);
        reset(1, 1);
      }
      break;
    case 2:
      {
        if (isEqual(3, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 3);
        reset(1, 1);
      }
      break;
    case 3:
      {
        if (isEqual(4, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 4);
        reset(1, 1);
      }
      break;
    case 4:
      {
        if (isEqual(5, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 5);
        reset(1, 1);
      }
      break;
    case 5:
      {
        if (isEqual(6, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 6);
        reset(1, 1);
      }
      break;
    case 6:
      {
        if (isEqual(7, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 7);
        reset(1, 1);
      }
      break;
    case 7:
      {
        if (isEqual(8, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 8);
        reset(1, 1);
      }
      break;
    case 8:
      {
        if (isEqual(9, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 9);
        reset(1, 1);
      }
      break;
    case 9:
      {
        if (isEqual(10, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 10);
        reset(1, 1);
      }
      break;
    case 10:
      {
        if (isEqual(11, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 11);
        reset(1, 1);
      }
      break;
    case 11:
      {
        if (isEqual(12, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 12);
        reset(1, 1);
      }
      break;
    case 12:
      {
        if (isEqual(13, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 13);
        reset(1, 1);
      }
      break;
    case 13:
      {
        if (isEqual(14, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 14);
        reset(1, 1);
      }
      break;
    case 14:
      {
        if (isEqual(15, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 15);
        reset(1, 1);
      }
      break;
    case 15:
      {
        if (isEqual(16, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 16);
        reset(1, 1);
      }
      break;
    case 16:
      {
        if (isEqual(17, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 17);
        reset(1, 1);
      }
      break;
    case 17:
      {
        if (isEqual(18, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 18);
        reset(1, 1);
      }
      break;
    case 18:
      {
        if (isEqual(19, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 19);
        reset(1, 1);
      }
      break;
    case 19:
      {
        if (isEqual(20, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 20);
        reset(1, 1);
      }
      break;
    case 20:
      {
        if (isEqual(21, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 21);
        reset(1, 1);
      }
      break;
    case 21:
      {
        if (isEqual(22, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 22);
        reset(1, 1);
      }
      break;
    case 22:
      {
        if (isEqual(23, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 23);
        reset(1, 1);
      }
      break;
    case 23:
      {
        if (isEqual(24, cube.querySelector(domId.cubeContents).innerText))
          return (cubeList.lastCube = 24);
        reset(1, 1);
      }
      break;
    case 24:
      {
        if (isEqual(25, cube.querySelector(domId.cubeContents).innerText)) {
          win({ sec: time.sec.value, ms: time.ms.value, name: "name" });
          return (cubeList.lastCube = 25);
        }
        reset(1, 1);
      }
      break;
    default:
      reset(1, 1);
  }
};

cubeList.cubes.forEach((cube) => {
  cube.addEventListener(onCLick, () => {
    handleClick(cube);
  });
});
//handling reset button
document
  .querySelector(domId.resetButton)
  .addEventListener(onCLick, () => reset(1, 1));
