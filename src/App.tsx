import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./common/DefaultLayout/DefaultLayout";
import {Login} from "./pages/login/Login";

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/*" Component={DefaultLayout}></Route>
    <Route path="/login" Component={Login}></Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
