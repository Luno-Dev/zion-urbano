import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';



const Navegacion = () => {
  return (
  <>
    <Navbar bg="dark" variant="dark" >
        <Container>
        <Link href="/home">
          <Navbar.Brand >Navbar</Navbar.Brand>
          </Link>
          <Nav className="text-center">
          <Link href="/login">
            <a className="nav-link"> Login </a>
            </Link> 
            <Link href="/contacto">
              <a className='nav-link'> contacto </a>
            </Link>        
            <Link href="#pricing">
            <a className='nav-link'>Productos</a>
            </Link>            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navegacion