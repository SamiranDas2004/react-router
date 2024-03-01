import React from 'react'
import { useParams } from 'react-router-dom'

function Use() {
  const  {id}=useParams();
  return (
    <div>User :{id}</div>
  )
}

export default Use