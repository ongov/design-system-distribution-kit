import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import IconsColourPicker from "./IconsColourPicker";
import CalloutColourPicker from "./CalloutColourPicker";
import * as serviceWorker from "./serviceWorker";

var pageName = window.location.pathname.split("/").pop();
console.log("pageName", pageName);
var compToStart = "";

switch (pageName) {
    case "icons-primary":
    case "icons-primary.html":
        compToStart = <IconsColourPicker />;
        break;
    case "icons-secondary":
    case "icons-secondary.html":
        compToStart = <IconsColourPicker />;
        break;
    case "callouts-asides":
    case "callouts-asides.html":
        compToStart = <CalloutColourPicker />;
        break;
    default:
        compToStart = <CalloutColourPicker />;
}

// console.log("compToStart", compToStart);

ReactDOM.render(compToStart, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
