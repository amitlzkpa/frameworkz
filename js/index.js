async function onBtnClick_Abt() {
  let aboutDiv = document.getElementById("about-div");
  aboutDiv.classList.toggle("fadeIn");
  aboutDiv.classList.toggle("fadeOut");
}

async function main() {
  let btnAbt = document.getElementById("btn-about");
  btnAbt.addEventListener(
    "click",
    onBtnClick_Abt,
    false
  );
}

window.addEventListener("load", (event) => {
  main();
});
