let nextWorkout = document.getElementById("next-workout");

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
    numb: "00:20",
    img: "assets/img/cobra.jpg",
  },
  {
    countRest: "",
    next: "NEXT 7/8",
    title: "SPINE LUMBAR TWIST STRETCH LEFT",
    numb: "00:20",
    img: "assets/img/spine_left.png",
  },
  {
    countRest: "",
    next: "NEXT 8/8",
    title: "SPINE LUMBAR TWIST STRETCH RIGTH",
    numb: "00:20",
    img: "assets/img/spine_right.png",
  },
];

let setRestWorkout = () => {
  return (rest.innerHTML = restWorkoutData
    .map((x) => {
      let { countRest, next, title, numb, img } = x;
      return `
    <div class="workout-item">
        <div class="img-count">
            <img src="assets/img/rest.png" width="100%" alt="" />
            <div class="count-rest" id="count-rest"></div>
        </div>
        <div class="next-workout">
            <div class="left-content">
                <div class="next">${next}</div>
                <div class="workout-title">${title}</div>
                <div class="numb">${numb}</div>
            </div>
            <img src=${img} width="100" alt="" />
        </div>
    </div>
    `;
    })
    .join(""));
};
setRestWorkout();

let workoutItems = document.querySelectorAll(".workout-item");
workoutItems[0].style.display = "none";
workoutItems[1].style.display = "none";
workoutItems[2].style.display = "none";
workoutItems[3].style.display = "none";
workoutItems[4].style.display = "none";
workoutItems[5].style.display = "none";
workoutItems[6].style.display = "none";

let countRest = document.querySelectorAll(".count-rest");
// console.log(restWorkouts[1].innerHTML)