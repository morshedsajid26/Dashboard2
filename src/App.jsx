import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayOut from './Layers/RootLayOut'
import Home from './Pages/Home'
import TimeCircle from './Pages/TimeCircle'
import Chart from './Pages/Chart'
import Paper from './Pages/Paper'
import Bag from './Pages/Bag'
import User from './Pages/User'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home/>}/>
      <Route path='/timecircle' element={<TimeCircle/>}/>
      <Route path='/chart' element={<Chart/>}/>
      <Route path='/bag' element={<Bag/>}/>
      <Route path='/paper' element={<Paper/>}/>
      <Route path='/user' element={<User/>}/>
    

    </Route>
    ))

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App