import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import LoginRoute from "./middleware/LoginRoute";
import ProtectedRoute from "./middleware/ProtectedRoute";

import MessagesComponent from "./component/user-panel/messages/MessagesComponent"
import DashboardComponent from "./component/user-panel/dashboard/DashboardComponent"
import LoginComponent from "./component/login/LoginComponent"
import TimeTravelComponent from "./component/timetravel/TimeTravelComponent"
import HomePageComponent from "./component/home/HomeComponent"
import RealtimeChatComponent from './component/realtime-chat/RealtimeChatComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/messages' element={<ProtectedRoute Element={MessagesComponent} />} />
        <Route path='/admin' element={<ProtectedRoute Element={DashboardComponent} />} />
        <Route path='/login' element={<LoginRoute Element={LoginComponent} />} />
        <Route path="/project/realtime-chat" element={<ProtectedRoute Element={RealtimeChatComponent} afterLogin="/project/realtime-chat" />} />
        <Route path="/project/timetravel" element={<TimeTravelComponent />} />
        <Route path="/" element={<HomePageComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
