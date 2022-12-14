import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from '../components/Home'
import { Navbar } from '../components/Navbar'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}
