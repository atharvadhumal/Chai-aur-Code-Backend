import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


function App  () {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
    <h1>Connecting Be to Fe</h1>
    <p>Jokes: {jokes.length}</p> {/*.length because jokes is a array and to access the values in it we used .length */}

    {
      jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }

    </>
  )
}

export default App