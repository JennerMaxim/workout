let audio = document.getElementById("audio");
let audios = [
  {
    suoud: "assets/audio/ready.mp3",
  },
  {
    suoud: "assets/audio/jump.mp3",
  },
  {
    suoud: "assets/audio/rest_climber.mp3",
  },
  {
    suoud: "assets/audio/climber.mp3",
  },
  {
    suoud: "assets/audio/rest_heel.mp3",
  },
  {
    suoud: "assets/audio/heel.mp3",
  },
  {
    suoud: "assets/audio/rest_plank.mp3",
  },
  {
    suoud: "assets/audio/plank.mp3",
  },
  {
    suoud: "assets/audio/cobra.mp3",
  },
  {
    suoud: "assets/audio/spine_left.mp3",
  },
];

let setAudio = () => {
  return (audio.innerHTML = audios.map((x) => {
    let { suoud } = x;
    return `
    <audio class="sound">
        <source src=${suoud} />
    </audio>
    `;
  }).join(""));
};
setAudio();

let playSound = document.querySelectorAll(".sound");
