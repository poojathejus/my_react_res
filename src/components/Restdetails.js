import React from 'react'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';

function Restdetails() {

    const[restList,setRestList] = useState([])

    const params = useParams()

    //for collapse 

    const [open, setOpen] = useState(false);

    
    //for modal

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function fetchdata(){
        await fetch('/restaurants.json')
        .then(results=>results.json())
        .then(data=>setRestList(data.restaurants))

    }

    console.log(restList);

    // eslint-disable-next-line eqeqeq
    const restaurant = restList.find(restdetail=>restdetail.id==params.id)
    console.log(restaurant);

    useEffect(()=>{
        fetchdata()
    },[])


  return (
   <>
   {
    restaurant?
        (<Row>
            <Col md={3}>
                <Image src={restaurant.photograph} fluid className='p-3'/>
            </Col>
            <Col md={8}>
            <ListGroup className='mt-3'>
                
                <ListGroup.Item><h2>{restaurant.name}</h2></ListGroup.Item>
                <ListGroup.Item>Cuisine : {restaurant.cuisine_type}</ListGroup.Item>
                <ListGroup.Item>Neighborhood : {restaurant.neighborhood}</ListGroup.Item>
                <ListGroup.Item>Address : {restaurant.address}</ListGroup.Item>
       
            </ListGroup>

            {/* operating hours */}

            <Button variant="primary" onClick={handleShow} className='p-3 mt-5'>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup as="ul">
                <ListGroup.Item>Monday : {restaurant.operating_hours.Monday}</ListGroup.Item>
                <ListGroup.Item>Tuesday : {restaurant.operating_hours.Tuesday}</ListGroup.Item>
                <ListGroup.Item>Wednesday : {restaurant.operating_hours.Wednesday}</ListGroup.Item>
                <ListGroup.Item>Thursday : {restaurant.operating_hours.Thursday}</ListGroup.Item>
                <ListGroup.Item>Friday : {restaurant.operating_hours.Friday}</ListGroup.Item>
                <ListGroup.Item>Saturday :  {restaurant.operating_hours.Saturday}</ListGroup.Item>
                <ListGroup.Item>Sunday : {restaurant.operating_hours.Sunday}</ListGroup.Item>
            </ListGroup>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
      </Modal>
 <br></br>
          {/* reviews */}

          <Button variant="primary" className='p-3 mt-5' onClick={() => setOpen(!open)} aria-controls="example-collapse-text"
        aria-expanded={open}>Click here to view reviews</Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         {
          restaurant.reviews.map(item=>(
            <div className='mt-5'>
              <h6>{item.name} : {item.date}</h6>
              <p>Rating : {item.rating}</p>
              <p>Comments : {item.comments}</p>
            </div>
          ))
         }
        </div>
      </Collapse>
     

            </Col>
        </Row>):'null'

   }
   </>
   
  )
}

export default Restdetails