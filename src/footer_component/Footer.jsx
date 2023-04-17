import React from 'react'
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container  from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
export default function Footer_() {
  return (
    <React.Fragment>
      <Container style={{marginTop:"50px"}}>
      <Card.Footer className='text-muted'>
       <Card >
      <Card.Body>
      <h1>Go Abroad</h1>
      <hr />
      <footer className='footer'>
        <div className='company'>
        <ul>
            <h2>Company</h2>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
          </footer>
      </Card.Body>
    </Card>
          </Card.Footer>
        </Container>
    </React.Fragment>
  )
}
