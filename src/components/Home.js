import React, {useState, useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'
import Resturentcards from './Resturentcards'
import{useDispatch,useSelector}from 'react-redux'
import {listRestaurant} from '../Action/restaurantAction'

function Home() {
  const [hotels,setHotels]=useState([])

   useEffect(()=>{

    const fetchData=async ()=>{
     await fetch('/restaurants.json')
     .then(res=>res.json())
     .then(data=>setHotels(data.restaurants))

    }

        fetchData() 
  },[])

// const dispatch=useDispatch()
// const hotels=useSelector(state=>state.restaurantList)
// const{restaurant}=hotels
// useEffect(() => {
//   dispatch(listRestaurant())
  
// }, [])

  

  return (
    <Row>
      {
        hotels.map(item => (
          <Col sm={2} md={8} lg={3} xl={3}>
            <Resturentcards data={item} />
          </Col>
        ))
      }
    </Row>
  )
}

export default Home
