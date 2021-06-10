import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "./styles.css";
import { FavouritesContextProvider } from './store/favourite-context'

const rootElement = document.getElementById("root");
ReactDOM.render(
<FavouritesContextProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</FavouritesContextProvider>, rootElement);
