import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Home from './Home/Home'
import Edit from './Home/Edit'
import Add from './Home/Add'
import { Routes,Route } from 'react-router-dom'
import Landing from './Home/Landing'
import Header from './Home/Header'
import './bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
