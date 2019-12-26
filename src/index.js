import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import AppComponent from "./app-component/app.component.jsx";

const App = () => {
    return <AppComponent/>
};

ReactDOM.render( <App/> , document.querySelector("#root"));