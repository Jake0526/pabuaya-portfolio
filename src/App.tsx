import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import LoginRoute from "./middleware/LoginRoute";
import ProtectedRoute from "./middleware/ProtectedRoute";

import MessagesComponent from "./component/user-panel/messages/MessagesComponent"
import DashboardComponent from "./component/user-panel/dashboard/DashboardComponent"
import LoginComponent from "./component/login/LoginComponent"
import HomePageComponent from "./component/home/HomeComponent"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/messages' element={<ProtectedRoute Element={MessagesComponent} />} />
        <Route path='/admin' element={<ProtectedRoute Element={DashboardComponent} />} />
        <Route path='/login' element={<LoginRoute Element={LoginComponent} />} />
        <Route path="/" element={<HomePageComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
