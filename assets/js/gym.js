let level = document.getElementById("level");
let level1 = document.getElementById("level1");
let level1Display = document.getElementById("level1Display");
let timeCount = document.getElementById("timeCount");
let downCount = document.getElementById("downCount");
let header = document.getElementById("header");
let ready = document.getElementById("ready");
let footer = document.getElementById("footer");
let jumping = document.getElementById("jumping");
// let countRest = document.getElementById("count-rest");
let rest = document.getElementById("rest");

let setLevel = () => {
  return (level.innerHTML = levels
    .map((x) => {
      let { numb, text, arrow } = x;
      return `
    <div class="level">
        <span class="numb">${numb}</span>
        <span class="text">${text}</span>
        <span class="arrow">${arrow}</span>
    </div>
    `;
    })
    .join(""));
};
setLevel();

let setLevel1 = () => {
  return (level1.innerHTML = level1s
    .map((x) => {
      let { workout, time, img } = x;
      return `
    <div class="workouts">
      <div class="left">
        <div class="workout">${workout}</div>
        <div class="time">${time}</div>
      </div>
      <img src=${img} width="100" height="auto">
    </div>
    `;
    })
    .join(""));
};
setLevel1();

levelTodo.style.display = "none";
// rest.style.display = "none";

let start = () => {
  level1Display.style.display = "none";
  levelTodo.style.display = "";

  downCount.style.display = "none";
  let counter = document.createElement("DIV");
  counter.className = "counter";
  footer.appendChild(counter);

  let i = 15;
  let isCountingDown = true;

  let timer = setInterval(() => {
    timeCount.innerHTML = i;
    counter.innerHTML = i + ' / 20"';

    if (isCountingDown) {
      counter.style.display = "none";
      i--;
      if (i <= 10) {
        // countRest.innerHTML = i;
        if (i <= 3) {
          downCount.style.display = "";
          downCount.innerHTML = i;

          if (i === 0) {
            isCountingDown = false;
            header.style.display = "none";
            ready.style.display = "none";
            downCount.innerHTML = "Start";
            downCount.style.borderRadius = "10px";
            downCount.style.left = "32%";
          }
        }
      }
    } else {
      counter.style.display = "";
      jumping.style.fontWeight = "bold";
      jumping.style.fontSize = "25px";
      jumping.style.color = "#979797";
      downCount.style.display = "none";
      i++;

      if (i === 21) {
        isCountingDown = true;
        levelTodo.style.display = "none";
        // rest.style.display = "";
        workoutRest[0].style.display = "";
        restWorkout();

        clearInterval(timer);
      }
    }
  }, 1000);
};

let screenHeigh = () => {
  let jump = document.getElementById("jump");
  var h = window.innerHeight;
  if (h <= 593) {
    jump.style.height = "400px";
  }
};
screenHeigh();

let restWorkout = () => {
  let i = 11;
  let timer = setInterval(() => {
    i--;
    // countRest.innerHTML = i;
    countRest[0].innerHTML = i;

    if (i === 0) {
      workoutRest[0].style.display = "none";
      workoutLevelOneItems[0].style.display = "";
      clearInterval(timer);
    }
  }, 1000);
};

let workout = document.getElementById("workout");

let showWorkout = () => {
  let { img, title, count } = x;
  return (workout.innerHTML = levelOneWorkout.map((x) => {
    return `
    <div class="workout">
      <div class="img-workout">${img}</div>
      <div class="title">${title}</div>
      <div class="count">${count}</div>
    </div>
    `;
  }));
};

// let font = document.getElementById("font");
// let font2 = document.getElementById("font2");
// font2.style.display = "none";

// let showfont2 = () => {
//     font2.style.display = "";
//     font.style.display = "none";
//     // console.log(font2)
// }

// let showfont = () => {
//     font2.style.display = "none";
//     font.style.display = "";
// }
