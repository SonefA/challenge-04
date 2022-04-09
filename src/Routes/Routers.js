import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Pencarian } from '../Views/Cari Mobil/Pencarian'
import { Detail } from '../Views/Detail Mobil/Detail'
import { Hasil } from '../Views/Hasil Pencarian/Hasil'

export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Pencarian/>} />
        <Route path='/Hasil' element={<Hasil/>} />
        <Route path='/Detail' element={<Detail/>} />
    </Routes>
  )
}
