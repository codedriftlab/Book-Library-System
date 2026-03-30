import { useState } from 'react'
import './App.css'
import BookCard from './components/BookCard'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <h1>
      Book Library System
    </h1>
    <BookCard />
    </>
  )
}

export default App
