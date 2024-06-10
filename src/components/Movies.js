import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import { Col, Row } from 'react-bootstrap'
import { accessMovieApi } from '../services/allApis'

function Movies({updated}) {

  const [allMovies,setMovies]=useState([])

  const [deleteUpdate,setDeleteUpdate]=useState(false)

  const getMovies=async()=>{
    const result=await accessMovieApi()
    if(result.status>=200 && result.status<300){
      setMovies(result.data)
    }
  }

  useEffect(()=>{
    getMovies()
  },[updated,deleteUpdate])
  console.log(allMovies);

  return (
    <div>
        <div className='p-2'>
      <Row>
        {
          allMovies?.length>0?(
            allMovies.map(movie=>(
              <Col lg={4}>
              <Moviecard data={movie} update={setDeleteUpdate}></Moviecard>
  
            </Col>
             ))
            
          )
          :

        
        <h2 className='text-center'>No movies added yet</h2>   
              }
         
      </Row>       
 </div>
    </div>
  )
}

export default Movies
