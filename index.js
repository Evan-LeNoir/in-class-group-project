// add menu toggle to bars icon in nav bar
import { Nav, Main } from "./Components";
import * as state from "./store";

const render = (st = state.Home) => {
  document.querySelector("#root").innerHTML = `
  ${Nav(state.Links)}
  ${Main(st)}
  `;
}

render(state.Home);


document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
