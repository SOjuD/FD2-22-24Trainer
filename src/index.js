import { initApp } from "./app";
import "./style.scss";
import { movieEventName, searchParamsToObj } from "./utils";


initApp(searchParamsToObj(window.location.search));

document.addEventListener(movieEventName, () => {
	const params = searchParamsToObj(window.location.search);

	initApp(params)
})