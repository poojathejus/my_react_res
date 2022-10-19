import React from 'react';
import {useState,useEffect} from 'react';
import Restcard from './Restcard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useDispatch,useSelector} from 'react-redux';
import { listres } from '../Actions/restaction';

function Home() {

    // const [restList,setRestList] = useState([])

    // async function fetchdata(){
    //     await fetch('/restaurants.json')
    //     .then(results=>results.json())
    //     .then(data=>setRestList(data.restaurants))
    // }

    //console.log(restList);

    
    const dispatch = useDispatch()
    
    const result = useSelector(state=>state.restReducer)
    console.log(result);
    
    let {restaurant} = result

    console.log(restaurant);

    useEffect(()=>{
      //  fetchdata()
        dispatch(listres())
    },[])
  


  return (
    <Row className='p-5'>
        {
            // restList.map((res)=>(
                restaurant.map((res)=>(
                
                //<h3>{res.name}</h3>
                <Col className='p-3' sm={12} md={6} lg={4} xl={3}>
                <Restcard data={res}/>
                </Col>
            ))
        }
    </Row>




  )
}

export default Home