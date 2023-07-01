let levelTodo = document.getElementById("level-do");

let levelOneWorkout = [
  {
    img: "../img/jump.gif",
    title: "JUMPING JACKS",
    count: "0/20",
  },
  {
    img: "../img/abdo.gif",
    title: "ABDOMINAL CRUNCHES <span>x 5</span>",
    count: "<button>✔️</button>",
  },
];

let setLevelOneWorkout = () => {
  return (levelTodo.innerHTML = `
    <div class="header" id="header">
        <div class="back"><</div>
        <div class="time" id="timeCount"></div>
        <div></div>
    </div>
    <div class="img-counter">
        <img src="assets/img/jump.gif" alt="" id="jump" />
        <div class="downCount" id="downCount"></div>
    </div>
    <div class="footer" id="footer">
        <div class="ready" id="ready">Ready to go!</div>
        <div class="jumping" id="jumping">JUMPING JACKS</div>
    </div>
    `);
};
setLevelOneWorkout();

let levelOne = document.getElementById("level-one");

let workouts = [
  {
    img: "assets/img/abdo.gif",
    title: "ABDOMINAL CRUNCHES",
    numb: "x 5",
    count: "✓",
  },
  {
    img: "assets/img/climber.gif",
    title: "MOUNTAIN CLIMBER",
    numb: "x 4",
    count: "✓",
  },
  {
    img: "assets/img/heel.gif",
    title: "HEEL TOUCH",
    numb: "x 10",
    count: "✓",
  },
  {
    img: "assets/img/plank.png",
    title: "PLANK",
    numb: "00:20",
    next: '<span class="next"> 0 </span> / 20',
  },
  {
    img: "assets/img/cobra.jpg",
    title: "COBRA STRETCH",
    numb: "00:30",
    next: '<span class="next"> 0 </span> / 30',
  },
  {
    img: "assets/img/spine_left.png",
    title: "SPINE LUMBAR TWIST STRETCH LEFT",
    numb: "00:30",
    next: '<span class="next"> 0 </span> / 30',
  },
  {
    img: "assets/img/spine_right.png",
    title: "SPINE LUMBAR TWIST STRETCH RIGHT",
    numb: "00:30",
    next: '<span class="next"> 0 </span> / 30',
  },
];

let setWorkout = () => {
  return (levelOne.innerHTML = workouts
    .map((x) => {
      let { img, title, numb, count, next } = x;
      return `
    <div class="workout" id="workout">
      <div class="img-workout">
          <img src=${img} alt="" />
      </div>
      <div class="title">
        <h2>${title}</h2>
        <span>${numb}</span>
      </div>
      <div class="nextbtn" id="count">${count}</div>
      <div class="count" id="count">${next}</div>

    </div>
    `;
    })
    .join(""));
};
setWorkout();

let workoutLevelOneItems = document.querySelectorAll(".workout");
workoutLevelOneItems[0].style.display = "none";
workoutLevelOneItems[1].style.display = "none";
workoutLevelOneItems[2].style.display = "none";
workoutLevelOneItems[3].style.display = "none";
workoutLevelOneItems[4].style.display = "none";
workoutLevelOneItems[5].style.display = "none";
workoutLevelOneItems[6].style.display = "none";

let nextBtn = document.querySelectorAll(".nextbtn");
nextBtn[3].style.display = "none";
nextBtn[4].style.display = "none";
nextBtn[5].style.display = "none";
nextBtn[6].style.display = "none";

nextBtn[0].onclick = () => {
  workoutLevelOneItems[0].style.display = "none";
  workoutRest[1].style.display = "";
  decrementRestOne();
};

nextBtn[1].onclick = () => {
  workoutLevelOneItems[1].style.display = "none";
  workoutRest[2].style.display = "";
  decrementRestTwo();
};

nextBtn[2].onclick = () => {
  workoutLevelOneItems[2].style.display = "none";
  workoutRest[3].style.display = "";
  decrementRestTree();
};

let count = document.querySelectorAll(".count");
count[0].style.display = "none";
count[1].style.display = "none";
count[2].style.display = "none";

let nextSpan = document.querySelectorAll(".next");

let increseCountPlank = () => {
  let i = 0;
  let timer = setInterval(() => {
    i++;
    nextSpan[0].innerHTML = i;
    if (i === 21) {
      clearInterval(timer);
      workoutLevelOneItems[3].style.display = "none";
      workoutRest[4].style.display = "";
      decrementRestFour();
    }
  }, 1000);
};

let increseCountCobra = () => {
  let i = 0;
  let timer = setInterval(() => {
    i++;
    nextSpan[1].innerHTML = i;
    if (i === 31) {
      clearInterval(timer);
      workoutLevelOneItems[4].style.display = "none";
      workoutRest[5].style.display = "";
      decrementRestFive();
    }
  }, 1000);
};

let increseCountSpineLeft = () => {
  let i = 0;
  let timer = setInterval(() => {
    i++;
    nextSpan[2].innerHTML = i;
    if (i === 31) {
      clearInterval(timer);
      workoutLevelOneItems[5].style.display = "none";
      workoutRest[6].style.display = "";
      decrementRestSix();
    }
  }, 1000);
};

let increseCountSpineRight = () => {
  let i = 0;
  let timer = setInterval(() => {
    i++;
    nextSpan[3].innerHTML = i;
    if (i === 31) {
      clearInterval(timer);
      workoutLevelOneItems[6].style.display = "none";
      done.style.display = "";
    }
  }, 1000);
};
