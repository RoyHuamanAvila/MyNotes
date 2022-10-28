import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./App.jsx";
import {Provider} from 'react-redux';
import { store } from "./app/store.js";

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
