let restWorkoutData = [
  {
    countRest: "",
    next: "NEXT 2/8",
    title: "ABDOMINAL CRUNCHES",
    numb: "x 5",
    img: "assets/img/abdo.gif",
  },
  {
    countRest: "",
    next: "NEXT 3/8",
    title: "MOUNTAIN CLIMBER",
    numb: "x 4",
    img: "assets/img/climber.gif",
  },
  {
    countRest: "",
    next: "NEXT 4/8",
    title: "HEEL TOUCH",
    numb: "x 10",
    img: "assets/img/heel.gif",
  },
  {
    countRest: "",
    next: "NEXT 5/8",
    title: "PLANK",
    numb: "00:20",
    img: "assets/img/plank.png",
  },
  {
    countRest: "",
    next: "NEXT 6/8",
    title: "COBRA STRETCH",
    numb: "00:30",
    img: "assets/img/cobra.jpg",
  },
  {
    countRest: "",
    next: "NEXT 7/8",
    title: "SPINE LUMBAR TWIST STRETCH LEFT",
    numb: "00:30",
    img: "assets/img/spine_left.png",
  },
  {
    countRest: "",
    next: "NEXT 8/8",
    title: "SPINE LUMBAR TWIST STRETCH RIGTH",
    numb: "00:30",
    img: "assets/img/spine_right.png",
  },
];

let setRestWorkout = () => {
  return (rest.innerHTML = restWorkoutData
    .map((x) => {
      let { countRest, next, title, numb, img } = x;
      return `
    <div class="workout-rest">
        <div class="img-count">
            <img src="assets/img/rest.png" width="100%" alt="" />
            <div class="count-rest" id="count-rest"></div>
        </div>
        <div class="width-next-workout">
          <div class="next-workout">
              <div class="left-content">
                  <div class="next">${next}</div>
                  <div class="workout-title">${title}</div>
                  <div class="numb">${numb}</div>
              </div>
              <img src=${img} width="100" alt="" />
          </div>
        </div>
    </div>
    `;
    })
    .join(""));
};
setRestWorkout();

let workoutRest = document.querySelectorAll(".workout-rest");
workoutRest[0].style.display = "none";
workoutRest[1].style.display = "none";
workoutRest[2].style.display = "none";
workoutRest[3].style.display = "none";
workoutRest[4].style.display = "none";
workoutRest[5].style.display = "none";
workoutRest[6].style.display = "none";

let countRest = document.querySelectorAll(".count-rest");

let decrementRestOne = () => {
  let i = 31;
  let countDecrement = setInterval(() => {
    i--;
    countRest[1].innerHTML = i;
    if (i === 3) {
      playSound[3].play();
    } else if (i === -1) {
      workoutRest[1].style.display = "none";
      workoutLevelOneItems[1].style.display = "";
      clearInterval(countDecrement);
    }
  }, 1000);
};

let decrementRestTwo = () => {
  let i = 31;
  let countDecrement = setInterval(() => {
    i--;
    countRest[2].innerHTML = i;
    if (i === 3) {
      playSound[5].play();
    } else if (i === -1) {
      workoutRest[2].style.display = "none";
      workoutLevelOneItems[2].style.display = "";
      clearInterval(countDecrement);
    }
  }, 1000);
};

let decrementRestTree = () => {
  let i = 31;
  let countDecrement = setInterval(() => {
    i--;
    countRest[3].innerHTML = i;
    if (i === 3) {
      playSound[7].play();
    }
    if (i === -1) {
      workoutRest[3].style.display = "none";
      workoutLevelOneItems[3].style.display = "";
      clearInterval(countDecrement);
      increseCountPlank();
    }
  }, 1000);
};

let decrementRestFour = () => {
  let i = 31;
  let countDecrement = setInterval(() => {
    i--;
    countRest[4].innerHTML = i;
    if (i === 3) {
      playSound[8].play();
    }
    if (i === -1) {
      workoutRest[4].style.display = "none";
      workoutLevelOneItems[4].style.display = "";
      clearInterval(countDecrement);
      increseCountCobra();
    }
  }, 1000);
};

let decrementRestFive = () => {
  let i = 31;
  let countDecrement = setInterval(() => {
    i--;
    countRest[5].innerHTML = i;
    if (i === 3) {
      playSound[9].play();
    }
    if (i === -1) {
      workoutRest[5].style.display = "none";
      workoutLevelOneItems[5].style.display = "";
      clearInterval(countDecrement);
      increseCountSpineLeft();
    }
  }, 1000);
};

let decrementRestSix = () => {
  let i = 31;
  let countDecrement = setInterval(() => {
    i--;
    countRest[6].innerHTML = i;
    if (i === -1) {
      workoutRest[6].style.display = "none";
      workoutLevelOneItems[6].style.display = "";
      clearInterval(countDecrement);
      increseCountSpineRight();
    }
  }, 1000);
};
