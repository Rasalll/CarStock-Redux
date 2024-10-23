import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <Navbar style={{backgroundColor:'#24A0ED'}}>
        <Container>
          <Navbar.Brand href="#home">
            <h3 className='text-light' style={{fontWeight:'100'}}>Rasal's Cars</h3></Navbar.Brand>
            <Link to={'/'} className='text-decoration-none'><h4 className='text-light' style={{fontWeight:'100'}}>Home</h4></Link>
            
        </Container>
      </Navbar>
      </>
  )
}

export default Header