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
      <Route path="/" element={<DashboardMain />} />
      <Route path="/dashboard" element={<DashboardMain />} />
      <Route path="/MyJourney" element={<MyJourney />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />

    </Routes>
  )
}

export default App
