import { reduceMethod } from "./arrayMethods";

const givenArray = document.querySelector(".input").textContent;
const result = reduceMethod(givenArray);
document.querySelector(".evaluate").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".solution").textContent(result);
});
