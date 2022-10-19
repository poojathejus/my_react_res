import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.pinimg.com/736x/53/9d/f2/539df27b07c8bc02c6bda6aaf6fb01d5.jpg"
              width="80"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            Chef Restaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header