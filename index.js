import { Header, Nav,  Main, Footer } from "./Components";

import * as state from "./store";

const render = (st = state.Home) => {
  document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
}

render(state.Home);


document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
