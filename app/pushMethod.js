import { pushMethod } from "./arrayMethods.js";

const solvePush = () => {
  document.querySelector(".evaluate").addEventListener("click", (event) => {
    event.preventDefault();
    const givenArray = document.querySelector(".input").value;
    const elementsToAdd = document.querySelector(".input-to-add").value;
    pushMethod(givenArray, elementsToAdd);
    const solution = document.querySelector(".solution").textContent;
    return solution;
  });
};

solvePush();
