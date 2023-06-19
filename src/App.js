import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Fapster from './pages/Fapster'
import Wingman from './pages/Wingman'
import Northstage from './pages/Northstage'
import VMS from './pages/VMS'
import Mindgasm from './pages/Mindgasm'
import Conductor from './pages/Conductor'

const App = () => {
  return (
    <div>
        <BrowserRouter basename = "/mainsite">
            <Routes>
                <Route path = "/mainsite" element = {<Home/>} />
                <Route path = "/Fapster" element = {<Fapster/>} />
                <Route path = "/Wingman" element = {<Wingman/>} />
                <Route path = "/Northstage" element = {<Northstage/>} />
                <Route path = "/VMS" element = {<VMS/>} />
                <Route path = "/Mindgasm" element = {<Mindgasm/>} />
                <Route path = "/Conductor" element = {<Conductor/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App