import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./App.jsx";
import {Provider} from 'react-redux';
import { store } from "./app/store.js";
import 'material-icons/iconfont/material-icons.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
