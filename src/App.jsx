import React, { useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import AOS from 'aos'
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: -10,
    })
  },[]);

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
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