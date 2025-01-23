import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import LoginRoute from "./middleware/LoginRoute";
import ProtectedRoute from "./middleware/ProtectedRoute";

import CatalogComponent from "./component/user-panel/catalog/CatalogComponent";
import LoginComponent from "./component/login/LoginComponent";
import HomePageComponent from "./component/home/HomeComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/customer/catalog' element={<ProtectedRoute Element={CatalogComponent} />} />
        <Route path='/login' element={<LoginRoute Element={LoginComponent} />} />
        <Route path="/" element={<HomePageComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
