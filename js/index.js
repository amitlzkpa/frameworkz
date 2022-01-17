async function onBtnClick_Landing() {
  let temp_MainCont = document.querySelector("#content-landing");
  let node_MainCont = temp_MainCont.content.cloneNode(true);
  let targetNode = document.querySelector("#active-content-target-container");
  targetNode.innerHTML = "";
  targetNode.appendChild(node_MainCont);
}

async function onBtnClick_Abt() {
  let temp_AbtCont = document.querySelector("#content-about");
  let node_AbtCont = temp_AbtCont.content.cloneNode(true);
  let targetNode = document.querySelector("#active-content-target-container");
  targetNode.innerHTML = "";
  targetNode.appendChild(node_AbtCont);
}

async function main() {
  onBtnClick_Landing();
  // onBtnClick_Abt();

  document
    .querySelector("#navbar-logo")
    .addEventListener("click", onBtnClick_Landing, false);

  document
    .querySelector("#btn-about")
    .addEventListener("click", onBtnClick_Abt, false);
}

window.addEventListener("load", (event) => {
  main();
});
