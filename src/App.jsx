import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MyPageA from './components/MyPageA'
import MyPageB from './components/MyPageB'
import MyPageC from './components/MyPageC'
import MyPageD from './components/MyPageD'
import NotFound from './components/NotFound'
import './App.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypagea" element={<MyPageA />} />
          <Route path="/mypageb" element={<MyPageB />} />
          <Route path="/mypagec" element={<MyPageC />} />
          <Route path="/mypaged" element={<MyPageD />} />
          <Route path='*' element={<NotFound />} /> key='notfound'
        </Routes>
      </BrowserRouter>
    </>
  )
}
