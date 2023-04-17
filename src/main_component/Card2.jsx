import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container  from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Card_2() {
  return (
    <React.Fragment>
         <Container style={{}}>
        <CardGroup>
            {/* Card1 */}
      <Card>
        <Card.Img variant="top" src="https://www.telegraph.co.uk/content/dam/Travel/2019/November/cambodia.jpg" />
        <Card.Body>
          <Card.Title>Travel 3</Card.Title>
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
        <Card.Img variant="top" src="https://www.tripsavvy.com/thmb/WLC6E_zn8R_LNqFRVciNg9BcDLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/paris-skyline-848643054-5bf49141c9e77c0051360c62.jpg" />
        <Card.Body>
          <Card.Title>Travel 4</Card.Title>
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
        <Card.Img variant="top" src="https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1646013548/zzrowyfbrqgnncaws0kh.jpg" />
        <Card.Body>
          <Card.Title>Travel 5 </Card.Title>
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
