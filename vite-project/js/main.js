import "../styles/style.css";
const DOMSelectors = {
  button: document.getElementById("btn")
};
async function newProduct() {
  document
    .querySelector(".menumain")
    .insertAdjacentElement(afterbegin, HTMLDivElement)
    .classList.add("card");
}
document.getElementById("btn").onclick = newProduct();
