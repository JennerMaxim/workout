let level = document.getElementById("level");
let level1 = document.getElementById("level1");
let level1Display = document.getElementById("level1Display");
let levelTodo = document.getElementById("level-do");
let timeCount = document.getElementById("timeCount");
let downCount = document.getElementById("downCount");
let header = document.getElementById("header");
let ready = document.getElementById("ready");
let footer = document.getElementById("footer");
let jumping = document.getElementById("jumping");
let countRest = document.getElementById("count-rest");
let rest = document.getElementById("rest");

let setLevel = () => {
  return (level.innerHTML = levels
    .map((x) => {
      let { numb, text, arrow } = x;
      return `
    <div class="level">
        <span class="numb">${x.numb}</span>
        <span class="text">${x.text}</span>
        <span class="arrow">${x.arrow}</span>
    </div>
    `;
    })
    .join(""));
};
setLevel();

let level1s = [
  {
    workout: "JUMPING JACKS",
    time: "00:20",
    img: "assets/img/jump.gif",
  },

  {
    workout: "ABDOMINAL CRUNCHES",
    time: "X 5",
    img: "assets/img/abdo.gif",
  },
  {
    workout: "MOUNTAIN CLIMBER",
    time: "X 4",
    img: "assets/img/climber.gif",
  },
  {
    workout: "HEEL TOUCH",
    time: "X 10",
    img: "assets/img/heel.gif",
  },
  {
    workout: "PLANK",
    time: "00:20",
    img: "assets/img/plank.png",
  },
  {
    workout: "COBRA STRETCH",
    time: "00:30",
    img: "assets/img/cobra.jpg",
  },
  {
    workout: "SPINE LUMBAR TWIST STRETCH LEFT",
    time: "00:30",
    img: "assets/img/spine_left.png",
  },
  {
    workout: "SPINE LUMBAR TWIST STRETCH RIGTH",
    time: "00:30",
    img: "assets/img/spine_right.png",
  },
];

let setLevel1 = () => {
  return (level1.innerHTML = level1s
    .map((x) => {
      let { workout, time, video } = x;
      return `
    <div class="workouts">
      <div class="left">
        <div class="workout">${x.workout}</div>
        <div class="time">${x.time}</div>
      </div>
      <img src=${x.img} width="100" height="auto">
    </div>
    `;
    })
    .join(""));
};
setLevel1();

levelTodo.style.display = "none";
rest.style.display = "none";

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
        countRest.innerHTML = i;
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
        rest.style.display = "";
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
    countRest.innerHTML = i;
    if (i === 0){
      clearInterval(timer);
    }
  }, 1000);
};
restWorkout();

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
