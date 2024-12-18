import React from 'react'
import  { useParams } from 'react-router-dom'

function Dynamicroute() {
    const{Name} = useParams()
  return (
    <div>
      <h1>Agalya{Name}</h1>
    </div>
  )
}

export default Dynamicroute
