const baseInput = document.getElementById("base");
const pxInput = document.getElementById("px");
const remInput = document.getElementById("rem");

baseInput.value = 16;

pxInput.addEventListener("keyup", (event) => {
  remInput.value = event.target.value / baseInput.value;
});

remInput.addEventListener("keyup", (event) => {
  pxInput.value = event.target.value * baseInput.value;
});
