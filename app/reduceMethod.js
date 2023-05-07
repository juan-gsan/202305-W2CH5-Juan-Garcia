import { reduceMethod } from "./arrayMethods";

const solveReduce = () => {
  document.querySelector(".evaluate").addEventListener("click", (event) => {
    event.preventDefault();
    const givenArray = document.querySelector(".input").value;
    reduceMethod(givenArray);
    const solution = document.querySelector(".solution").textContent;
    return solution;
  });
};

solveReduce();
