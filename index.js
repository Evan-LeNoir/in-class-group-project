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
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});


