async function onBtnClick_Landing() {
  let temp_MainCont = document.getElementById("content-landing");
  let node_MainCont = temp_MainCont.content.cloneNode(true);
  let targetNode = document.getElementsByTagName("main")[0];
  targetNode.innerHTML = "";
  targetNode.appendChild(node_MainCont);
}

async function onBtnClick_Abt() {
  let temp_AbtCont = document.getElementById("content-about");
  let node_AbtCont = temp_AbtCont.content.cloneNode(true);
  let targetNode = document.getElementsByTagName("main")[0];
  targetNode.innerHTML = "";
  targetNode.appendChild(node_AbtCont);
}

async function main() {
  onBtnClick_Landing();

  document
    .getElementById("navbar-logo")
    .addEventListener("click", onBtnClick_Landing, false);

  document
    .getElementById("btn-about")
    .addEventListener("click", onBtnClick_Abt, false);
}

window.addEventListener("load", (event) => {
  main();
});
