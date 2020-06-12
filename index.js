
import Navigo from "navigo";
import { Header, Nav, Main, Footer } from "./components";
import { capitalize } from "lodash";
import * as state from "./store";

const router = new Navigo(window.location.origin).resolve();

router
  .on({
    ":page": params => render(state[capitilize(params.page)]),
    "/": ( => render(state.Home)
  })
    .resolve()

const render = (st = state.Home) => {
  document.querySelector("#root").innerHTML = `
  ${Nav(state.Links)}
  ${Main(st)}
  `;
}

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});


