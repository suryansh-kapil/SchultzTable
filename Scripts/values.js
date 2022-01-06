const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];
var highscores = [
  {
    place: 1,
    name: "player",
    time: { sec: 59, ms: 99 },
  },
  {
    place: 2,
    name: "player",
    time: { sec: 59, ms: 99 },
  },
  {
    place: 3,
    name: "player",
    time: { sec: 59, ms: 99 },
  },
  {
    place: 4,
    name: "player",
    time: { sec: 59, ms: 99 },
  },
  {
    place: 5,
    name: "player",
    time: { sec: 59, ms: 99 },
  },
];
let time = {
  control: null,
  interval: 10,
  sec: {
    value: 0,
    element: document.querySelector("#sec"),
  },
  ms: {
    value: 0,
    element: document.querySelector("#ms"),
  },
  max: {
    sec: 60,
    ms: 100,
  },
  min: 0,
};
// colors
let colors = [
  "turquoise",
  "coral",
  "gold",
  "chartreuse",
  "hotpink",
  "darkviolet",
  "deepskyblue",
  "firebrick",
  "fuchsia",
  "indigo",
  "khaki",
  "limegreen",
  "mediumorchid",
  "orangered",
  "orange",
  "peru",
  "slategray",
  "springgreen",
  "red",
  "blue",
  "green",
  "yellow",
  "tomato",
  "cadetblue",
  "aquamarine",
  "white",
];
const cubeColor = "--cube-color";

const domId = {
  closeButton: "#close-wrapper",
  highScoreContainer: "#high-scores-wrapper",
  showHighScores: "#cube-button-highscores",
  scoreIndex: "#index",
  scoreName: "#name",
  scoreTime: "#time",
  cubeContents: "#contents",
  resetButton: "#button-reset",
};
const domClass = {
  scoreHolder: ".score",
  cube: ".cube",
  button: ".button",
  hide: "hide",
  toggleSelect: "selected",
};

const timeSeperator = ":";

const onCLick = "click";
const cubeId = "cube-";
