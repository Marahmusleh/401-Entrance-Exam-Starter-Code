import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'


export class FavCards extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row xs={1} md={3} className='g-4'>
            {this.props.apiCrudData.map((obj,i)=>(
              <Col key={i}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant='top' src={obj.photo} />
                  <Card.Body>
                    <Card.Title>{obj.name}</Card.Title>
                    <Card.Text>
                    {obj.instructions}
                    </Card.Text>
                    <Button onClick={()=>{this.props.deleteFavFlowers(obj._id)}} variant='primary'>Delete</Button>
                    <Button onClick={()=>{this.props.updateFavFlowers(obj)}} variant='primary'>Update</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default FavCards;
