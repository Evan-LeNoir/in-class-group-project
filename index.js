import { nav } from "./nav.js";
import Navigo from "navigo";
import { Header, Nav, Main, Footer } from "./components";

const router = new Navigo(window.location.origin).resolve();

router
  .on({
    "/": () => render(nav).resolve()
  }).resolve();
function render(Home)


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


