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
