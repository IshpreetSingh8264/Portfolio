import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardMain from './App/Dashboard/DashboardMain'
import DashboardContent from './App/Dashboard/DashboardContent'
import { Navigate, Route, Routes } from 'react-router-dom'
import MyJourney from './App/MyJourney/MyJourney'

function App() {

  return (
    <Routes>
      <Route path="/Portfolio" element={<DashboardMain />} />
      <Route path="/Portfolio/" element={<DashboardMain />} />
      <Route path="/Portfolio/dashboard" element={<DashboardMain />} />
      <Route path="/Portfolio/MyJourney" element={<MyJourney />} />
      <Route path="*" element={<Navigate to="/Portfolio/dashboard" />} />

    </Routes>
  )
}

export default App
