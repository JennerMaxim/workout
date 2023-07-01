let done = document.getElementById("done");

let completed = [
  {
    level: 1,
  },
];

let setCompleted = () => {
  return (done.innerHTML = completed.map((x) => {
    let { level } = x;
    return `
        <div class="cong">
        <div class="cup-level">
          <div class="cup">🏆</div>
          <div class="level-complited">
            <div class="level">Level ${level}</div>
            <div class="complited">Complited</div>
          </div>
        </div>
        <div class="do">DO IT AGAIN</div>
      </div>
        `;
  }));
};
setCompleted();
done.style.display = "none";

let doItAgain = document.querySelectorAll(".do");
doItAgain[0].onclick = () => {
  done.style.display = "none";
  start();
};
