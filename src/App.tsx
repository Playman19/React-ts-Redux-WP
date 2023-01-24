import React from "react";

import './main.global.css';

import { applyMiddleware, legacy_createStore as createStore, Middleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension"

import { rootReducer } from "./store";

const ping:Middleware = (store) => (next) => (action) => {
        console.log(action);
        next(action);
}

const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(ping)
));

export function AppComponent() {

    return(
        
        <Provider store={store}>
        	<h1>Hello world</h1>
        </Provider>
    )
}
export default AppComponent
