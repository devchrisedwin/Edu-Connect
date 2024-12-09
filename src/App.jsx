import React, {useState} from 'react'
import './App.css'
import Badges from './component/Badges'
import Community from './component/Community'
import Dashboardhome from './component/Dashboardhome'
import Profile from './component/Profile'
import Navbar from './component/Navbar'
import Question from './component/Question'
import Signup from './component/Signup'
import { CommentContextProvider } from './context/CommentContext'
import { QuestionModalProvider } from './context/QuestionContext'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import How from './pages/How'
import Testimonial from './pages/Testimonial'
import { ContactContextProvider } from './context/ContactUsContext'
import { TiThMenu } from "react-icons/ti";
import Login from './component/Login'

function App() {
  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <div className='lg:w-[70%] w-[100%] overflow-hidden border m-[auto] bg-[#F2F4F7]'>
       
      {/* <QuestionContextProvider> */}
      <BrowserRouter>
      <QuestionModalProvider>
      <CommentContextProvider>
        <ContactContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/how-it-works' element={<How/>}/>
          <Route path='/testimonials' element={<Testimonial/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard showSideBar={showSideBar}/>}>
              <Route path='' element={<Dashboardhome menu={<TiThMenu/>} showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>} />
              <Route path='question' element={<Question menu={<TiThMenu/>} showSideBar={showSideBar} setShowSideBar={setShowSideBar} />} />
              <Route path='community' element={<Community menu={<TiThMenu/>} showSideBar={showSideBar} setShowSideBar={setShowSideBar} />}/>
              <Route path='profile' element={<Profile menu={<TiThMenu/>} showSideBar={showSideBar} setShowSideBar={setShowSideBar} />}/>
              <Route path='badges' element={<Badges menu={<TiThMenu/>} showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>}/>
            </Route>
        </Routes>
        </ContactContextProvider>
        </CommentContextProvider>
        </QuestionModalProvider>
      </BrowserRouter>
      {/* </QuestionContextProvider> */}
      
    </div>
  )
}

export default App
