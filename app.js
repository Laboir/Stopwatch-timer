const miliSecondsLabel = document.getElementById("millisecond");
const secondLabel = document.getElementById("second");
const minuteLabel = document.getElementById("minute");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

const lapList = document.getElementById("lap-list");
const lapContainer = document.querySelector(".lap-container");

//stopwatch varaibles

let miliSecond = 0;
let second = 0;
let minute = 0;
let interval;
let addLap;
let lapTime;

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
stop.addEventListener("click", stopTimer);

//* Start  Timer
function startTimer() {
  interval = setInterval(updateTimer, 10);
}

function pauseTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  resetDataTimer();
  displayTimer();
  addLap.remove();
}

//* Update Timer
function updateTimer() {
  miliSecond++;
  if (miliSecond === 100) {
    miliSecond = 0;
    second++;

    if (second === 60) {
      second = 0;
      minute++;
    }
  }
  displayTimer();
}

function displayTimer() {
  miliSecondsLabel.textContent = AddZero(miliSecond);
  secondLabel.textContent = AddZero(second);
  minuteLabel.textContent = AddZero(minute);
}

function AddZero(time) {
  const timer = time.toString().padStart(2, "0");

  return timer;
}

function resetDataTimer() {
  minute = 0;
  second = 0;
  miliSecond = 0;
}

function stopTimer() {
  stopTimerData();
  clearInterval(interval);
  resetDataTimer();
  displayTimer();
}

function stopTimerData(element) {
  lapTime = ` ${AddZero(minute)} : ${AddZero(second)} : ${AddZero(miliSecond)}`;

  addLap = document.createElement("p");
  addLap.classList.add("lap-list");
  addLap.innerHTML = ` <span>Lap${
    lapContainer.childElementCount + 1
  }:<span/> ${lapTime} `;
  lapContainer.appendChild(addLap);
}
