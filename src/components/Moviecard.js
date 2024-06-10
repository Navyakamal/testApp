import React, { useState } from 'react'
import { Trash2 } from 'react-feather'
import Card from 'react-bootstrap/Card';
import { deleteMovieApi } from '../services/allApis';

function Moviecard({data,update}) {


  const deleteMovie=async(id)=>{
    const result=await deleteMovieApi(id)
    if(result.status>=200 && result.status<300){
      update(true)
      alert('Movie deleted')
        
    }
  }
  return (
    <div>
      <div>
      <Card style={{ width: '18rem' }} className='ms-5 mt-5 d-flex text-center ca1'>
      <Card.Img variant="top" src={data.imageUrl} style={{height:'200px'}} className='p-3'/>
      <Card.Body>
        <Card.Title style={{fontSize:'24px'}}>{data.title}</Card.Title>
          <Card.Text>
             <p className='t2'>Director: {data.director}</p>
             <p className='t3'>Release year: {data.year}</p>
            </Card.Text>
               <div className='d-flex justify-content-end'>
                  <Trash2 onClick={()=>deleteMovie(data.id)} className=''></Trash2>
  
                </div>     
          
         </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default Moviecard
