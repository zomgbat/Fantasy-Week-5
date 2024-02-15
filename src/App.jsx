import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

import { Route, Router, Routes } from 'react-router-dom'
import CharactersListPage from './pages/CharactersListPage.jsx'
import CharactersCardPage from './pages/CharactersCardPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New Character</Link>
      <Routes>
        <Route path='/' element={<CharactersListPage />} />
        <Route path='/new' element={<CharactersCardPage />} />
      </Routes>
    </>
  )
}

export default App
