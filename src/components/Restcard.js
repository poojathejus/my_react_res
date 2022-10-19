import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Restcard({data}) {
    console.log(data);
  return (
    <Link to={`/restaurant/${data.id}`} style={{textDecoration:'none',color:'blue'}}>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={data.photograph} style={{padding:5}}/>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
        Neighborhood : {data.neighborhood}
        </Card.Text>
        <Card.Text>
        Cuisine : {data.cuisine_type}
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Restcard