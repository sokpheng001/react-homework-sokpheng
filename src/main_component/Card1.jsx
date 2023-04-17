import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container  from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Card_1() {
  return (
    <React.Fragment>
         <Container style={{marginTop:"50px"}}>
        <CardGroup>
            {/* Card1 */}
      <Card>
        <Card.Img variant="top" src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/506000/506659-eiffel-tower.jpg" />
        <Card.Body>
          <Card.Title>Travel 1</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
              {/* Card 2 */}
      <Card>
        <Card.Img variant="top" src="https://ychef.files.bbci.co.uk/976x549/p014pzq8.jpg" />
        <Card.Body>
          <Card.Title>Travel 2</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
    {/* Card 3 */}
    <Card>
        <Card.Img variant="top" src="https://ychef.files.bbci.co.uk/976x549/p014pzq8.jpg" />
        <Card.Body>
          <Card.Title>Travel 2 (vol2)</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
    {/*  */}
    </CardGroup>
        </Container>
    </React.Fragment>
  )
}
