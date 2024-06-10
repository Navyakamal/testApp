import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addMovieApi } from '../services/allApis';

function Add({update}) {

    const [movieInputs,setMovieInputs]=useState({
      title:"",
      director:"",
      year:"",
      imageUrl:""
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setDatas=(e)=>{
      let {name,value}=e.target
      setMovieInputs({...movieInputs,[name]:value})
    }
    console.log(movieInputs);

    const addMovie=async()=>{
      const {title,director,year,imageUrl}=movieInputs
        if(title=="" || director=="" || year=="" || imageUrl==""){
      alert('Please fill all details')      
      }
        else{
          const out=await addMovieApi(movieInputs)
          console.log(out);
          if(out.status>=200 && out.status<300){
              alert('Movie added successfully')           
              update(true)
                handleClose()
          }
          else{
            alert('Adding movie failed')
                      }
        }
    }
  return (
    <div>
     <Container>
          <div className='d-flex justify-content-end'>
            <Button variant="outline-dark" onClick={handleShow}>Add new movie</Button>
          </div>
          <Modal show={show} onHide={handleClose}>
                 <Modal.Header closeButton>
                   <Modal.Title>Add a movie</Modal.Title>
                 </Modal.Header>
        <Modal.Body>
            <input type="text" placeholder='Enter title' className='form-control mt-3' onChange={(e)=>setDatas(e)} name='title'/>
            <input type="text" placeholder='Enter director name' className='form-control mt-3' onChange={(e)=>setDatas(e)} name='director'/>
            <input type="text" placeholder='Release year' className='form-control mt-3' onChange={(e)=>setDatas(e)} name='year'/>
            <input type="text" placeholder='imageUrl' className='form-control mt-3' onChange={(e)=>setDatas(e)} name='imageUrl'/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovie}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
     </Container>
    </div>
  )
}

export default Add
