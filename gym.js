let level = document.getElementById("level");

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

let font = document.getElementById("font");
let font2 = document.getElementById("font2");
font2.style.display = "none";

let showfont2 = () => {
    font2.style.display = "";
    font.style.display = "none";
    // console.log(font2)
}

let showfont = () => {
    font2.style.display = "none";
    font.style.display = "";
}