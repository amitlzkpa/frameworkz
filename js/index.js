async function onBtnClick_Landing() {
  let targetNode = document.querySelector("#active-modal-container");
  targetNode.innerHTML = "";
  targetNode.className = "hidden";
}

async function onBtnClick_Abt() {
  let temp_AbtCont = document.querySelector("#content-about");
  let node_AbtCont = temp_AbtCont.content.cloneNode(true);
  let targetNode = document.querySelector("#active-modal-container");
  targetNode.innerHTML = "";
  targetNode.appendChild(node_AbtCont);
  targetNode.className = "visible";
}

async function onBtnClick_Hamburger() {
  let menu_Modal = document.querySelector("#navbar-list-menu-modal");
  let isInView =
    !!menu_Modal.style.visibility && menu_Modal.style.visibility !== "hidden";
  menu_Modal.style.visibility = isInView ? "hidden" : "visible";
}

async function main() {
  onBtnClick_Landing();
  // onBtnClick_Abt();

  document
    .querySelector("#navbar-logo")
    .addEventListener("click", onBtnClick_Landing, false);

  document
    .querySelector("#navbar-list-menu-container")
    .addEventListener("click", onBtnClick_Hamburger, false);

  document
    .querySelectorAll(".btn-about")
    .forEach((btn) => btn.addEventListener("click", onBtnClick_Abt, false));

  // document.addEventListener("click", onBtnClick_Landing, false);
}

window.addEventListener("load", (event) => {
  main();
});
