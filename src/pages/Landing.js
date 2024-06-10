import React, { useState } from 'react'
import Add from '../components/Add'
import { Container } from 'react-bootstrap'
import Movies from '../components/Movies'

function Landing() {
  const [addUpdate,setAddUpdate]=useState(false)
  return (
    <div>
      <div className='mt-3'>
        <h1 className='h1'>MOVIE LIST</h1>
            <Add update={setAddUpdate}></Add>
        <Container className=' mt-5 mb-3'>
            <Movies updated={addUpdate}></Movies>
        </Container>
      </div>
    </div>
  )
}

export default Landing
