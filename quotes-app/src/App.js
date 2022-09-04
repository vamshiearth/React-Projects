import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const url = 'https://api.adviceslip.com/advice'
  const [data, setData] = useState('')

  const fetchData = () => {
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        let actualData = data.slip.advice
        setData(actualData)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='app'>
      <div className='card'>
        <h1 className='advice'>{data}</h1>
        <button className='button' onClick={fetchData}>
          <span>Advice Me!!</span>
        </button>
      </div>
    </div>
  )
}

export default App
