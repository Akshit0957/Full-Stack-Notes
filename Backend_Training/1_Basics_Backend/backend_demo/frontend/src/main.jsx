// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import UserProvider from './components/8_Context_Api/User_Provider.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <UserProvider>
//       <App />
//    </UserProvider>
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./components/11_Redux/1_store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

