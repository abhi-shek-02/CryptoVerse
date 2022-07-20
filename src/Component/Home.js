import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CryptoCurrencies from './CryptoCurrencies'
import News from './News'
import NavBar from './NavBar'
import Main from './Main'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Routes >
        <Route path='/' element={<Main/>} />
        <Route path='cryptoCurrencies' element={<CryptoCurrencies />} />
        <Route path='news' element={<News />} />
      </Routes>
    </div>
  )
}
export default Home