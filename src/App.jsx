import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/' element={<Layout/>}>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App