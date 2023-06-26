let level = document.getElementById("level");
let level1 = document.getElementById("level1");

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
    video: "assets/video/jumping_jacks.MP4",
  },

  {
    workout: "ABDOMINAL CRUNCHES",
    time: "X 5",
    video: "assets/video/abdominal_crunches.MP4",
  },
  {
    workout: "MOUNTAIN CLIMBER",
    time: "X 4",
    video: "assets/video/mountain_climber.MP4",
  },
  {
    workout: "HEEL TOUCH",
    time: "X 10",
    video: "assets/video/heel_touch.MP4",
  },
  {
    workout: "PLANK",
    time: "00:20",
    video: "assets/video/plank.mp4",
  },
  {
    workout: "COBRA STRETCH",
    time: "00:30",
    video: "assets/video/cobra_stretch.mp4",
  },
  {
    workout: "SPINE LUMBAR TWIST STRETCH LEFT",
    time: "00:30",
    video: "assets/video/spine_left.mp4",
  },
  {
    workout: "SPINE LUMBAR TWIST STRETCH RIGTH",
    time: "00:30",
    video: "assets/video/spine_right.mp4",
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
      <video width="22%" height="80px" loop autoplay muted>
        <source src=${x.video} type="video/MP4">
        Your browser does not support the video.
      </video>
    </div>
    `;
    })
    .join(""));
};
setLevel1();

let start = () => {
}

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
