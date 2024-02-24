import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Explore, Likes, SignUp, Login } from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
    </div>
  )
}

export default App
