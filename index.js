import { Header, Main, Footer } from "./Components";

const render = () => {
  document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Main()}
  ${Footer()}
  `;
};
render();

// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
