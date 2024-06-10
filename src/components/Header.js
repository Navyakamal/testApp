import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
       <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand style={{fontSize:'30px',color:'white'}} className='b1'>
          {' '}
            CINEMAITE
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
