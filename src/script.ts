import HexConverter from "./modules/hexConverter";

const binInput = document.querySelector("#bin") as HTMLInputElement;
const convButton = document.querySelector("#converter") as HTMLButtonElement;
const hexArea = document.querySelector("#hex") as HTMLInputElement;
const copyHex = document.querySelector("#copiar") as HTMLButtonElement;
const result = document.querySelector("#result") as HTMLDivElement;
const hex = new HexConverter();

const showHexOnScreen = (): void => {
  hexArea.value = hex.binToHex(binInput.value);
  result.style.display = "flex";
};

const copy = (): void => {
  hexArea.select();
  hexArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
};

convButton.addEventListener("click", showHexOnScreen);
copyHex.addEventListener("click", copy);
