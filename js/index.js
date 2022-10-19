async function closeAllModals() {
  let targetNode = document.querySelector("#active-modal-container");
  targetNode.innerHTML = "";
  targetNode.classList.add("hidden");
  targetNode.classList.remove("visible");
}

async function onBtnClick_Abt() {
  console.log("poo");
  let temp_AbtCont = document.querySelector("#content-about");
  let node_AbtCont = temp_AbtCont.content.cloneNode(true);
  let targetNode = document.querySelector("#active-modal-container");
  targetNode.innerHTML = "";
  targetNode.appendChild(node_AbtCont);
  targetNode.classList.remove("hidden");
  targetNode.classList.add("visible");
}

async function onBtnClick_Svcs() {
  let temp_SvcsCont = document.querySelector("#content-services");
  let node_SvcsCont = temp_SvcsCont.content.cloneNode(true);
  let targetNode = document.querySelector("#active-modal-container");
  targetNode.innerHTML = "";
  targetNode.appendChild(node_SvcsCont);
  targetNode.classList.remove("hidden");
  targetNode.classList.add("visible");
}

async function onBtnClick_Contact() {
  let temp_CntcCont = document.querySelector("#content-contact");
  let node_CntcCont = temp_CntcCont.content.cloneNode(true);
  let targetNode = document.querySelector("#active-modal-container");
  targetNode.innerHTML = "";
  targetNode.appendChild(node_CntcCont);
  targetNode.classList.remove("hidden");
  targetNode.classList.add("visible");
}

async function onBtnClick_Hamburger() {
  let menu_Modal = document.querySelector("#navbar-list-menu-modal");
  let isInView =
    !!menu_Modal.style.visibility && menu_Modal.style.visibility !== "hidden";
  menu_Modal.style.visibility = isInView ? "hidden" : "visible";
}

async function onClk_Anywhere(evt) {
  let clkIsOnModal = evt.target.closest("#active-modal-container") !== null;
  let activeModalTgtNode = document.querySelector("#active-modal-container");
  let modalIsOpen = activeModalTgtNode.classList.contains("visible");
  if (!clkIsOnModal && modalIsOpen) {
    await closeAllModals();
  }
}

async function main() {
  // onBtnClick_Abt();

  document
    .querySelector("#navbar-logo")
    .addEventListener("click", closeAllModals, false);

  document
    .querySelector("#navbar-list-menu-container")
    .addEventListener("click", onBtnClick_Hamburger, false);

  document
    .querySelectorAll(".btn-about")
    .forEach((btn) => btn.addEventListener("click", onBtnClick_Abt, false));

  document
    .querySelectorAll(".btn-services")
    .forEach((btn) => btn.addEventListener("click", onBtnClick_Svcs, false));

  document
    .querySelectorAll(".btn-contact")
    .forEach((btn) => btn.addEventListener("click", onBtnClick_Contact, false));

  document.addEventListener("click", onClk_Anywhere, true);
}

window.addEventListener("load", (event) => {
  main();
});
