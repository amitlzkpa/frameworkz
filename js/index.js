async function main() {
  console.log("foo");
  let btnAbt = document.getElementById("btn-about");
  console.log(btnAbt);
  btnAbt.addEventListener(
    "click",
    async function () {
      let temp = document.getElementsByTagName("template")[0];
      let clon = temp.content.cloneNode(true);
      document.body.appendChild(clon);
    },
    false
  );
}

window.addEventListener("load", (event) => {
  main();
});
