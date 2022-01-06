const updateTime = () => {
  if (time.sec.value === time.max.sec) {
    return;
  } else if (time.ms.value === time.max.ms) {
    time.sec.value++;
    time.ms.value = time.min;
  } else {
    time.ms.value += 1;
  }
  if (time.sec.value < 10)
    time.sec.element.innerText = `${time.min}` + time.sec.value;
  else time.sec.element.innerText = time.sec.value;
  if (time.ms.value < 10)
    time.ms.element.innerText = `${time.min}` + time.ms.value;
  else if (time.ms.value == time.max.ms)
    time.ms.element.innerText = time.ms.value - 1;
  else time.ms.element.innerText = time.ms.value;
};
const startClock = () => {
  time.sec.value = time.min;
  time.ms.value = time.min;
  time.control = setInterval(updateTime, time.interval);
  return { sec, ms };
};
startClock();
