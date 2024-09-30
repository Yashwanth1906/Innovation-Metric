import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {LandingPageComponent} from './pages/landing-page'
import { Dashboard} from './pages/admin/dashboard'
import EngineeringAnalytics from './pages/admin/engineering-analytics'
import {PatentsComponent} from './pages/admin/patents'
import {ResearchPapersComponent} from './pages/admin/research-papers'
import {RankingDashboardComponent} from './pages/admin/ranking-dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StudentHomeComponent } from './components/student-home'
import {RecoilRoot } from "recoil"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecoilRoot>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageComponent />}></Route>
          <Route path="/admindash" element={<Dashboard />}></Route>
          <Route path="/enganalysis" element={<EngineeringAnalytics />}></Route>
          <Route path="/patents" element={<PatentsComponent />}></Route>
          <Route path="/researchpap" element={<ResearchPapersComponent />}></Route>
          <Route path="/adminranking" element={<RankingDashboardComponent />}></Route>
          <Route path="/studenthome" element={<StudentHomeComponent />}></Route>
        </Routes>
      </BrowserRouter>

    </RecoilRoot>
    </>
  )
}

export default App
