import HexConverter from "./modules/hexConverter.js";
const binInput = document.querySelector("#bin");
const convButton = document.querySelector("#converter");
const hexArea = document.querySelector("#hex");
const copyHex = document.querySelector("#copiar");
const result = document.querySelector("#result");
const hex = new HexConverter();
const showHexOnScreen = () => {
  hexArea.value = hex.binToHex(binInput.value);
  result.style.display = "flex";
};
const copy = () => {
  hexArea.select();
  hexArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
};
convButton.addEventListener("click", showHexOnScreen);
copyHex.addEventListener("click", copy);
