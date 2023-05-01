import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

  const dataFromRedux=useSelector((r)=>r.Login)
  console.log(dataFromRedux)

  return <h1>Data fetch from redux through useSelector in console</h1>
}

export default Home