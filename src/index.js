import { initApp } from "./app";
import "./style.scss";
import { movieEventName, searchParamsToObj } from "./utils";


initApp(searchParamsToObj(window.location.search));

document.addEventListener(movieEventName, initApp)

window.addEventListener('popstate', initApp)