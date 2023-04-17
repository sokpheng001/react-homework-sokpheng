import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import  Container from 'react-bootstrap/Container'
import Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Banner() {
  return (
    <React.Fragment>
        <Container>
        <Card>
            <Card.Img className='img' variant="top" src="https://www.celebritycruises.com/blog/content/uploads/2022/03/what-is-paris-famous-for-louvre-palace-1920x890.jpg" />
        {/* detail */}
            <Card.Body className='text-center'>
            <Card.Body>
            <Card.Title>Special Travelling Abroad</Card.Title>
            <Card.Text>
            With the best view over the worl and good resource
            </Card.Text>
            <Button variant="secondary">Go somewhere</Button>
            </Card.Body>
            </Card.Body>
            </Card>
            {/* card */}
            <Card className="text-center">
        </Card>
        </Container>
    </React.Fragment>
  )
}
