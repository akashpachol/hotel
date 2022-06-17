import React from 'react'
import {useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import{Row,Col,Image,ListGroup,Card} from 'react-bootstrap'
import Rating from './Rating'
function Hoteldeatails() {
    const [hotels, setHotels] = useState([])
    const {id}=useParams()
    useEffect(() => {
       const fetchData=async ()=>{
        await fetch('/restaurants.json')
        .then((res)=>res.json())
        .then((data)=>setHotels(data.restaurants))

       }
    //    console.log(hotels);

       fetchData()
    }, [])
     const details=hotels.find(i=>i.id==id)

  return (
    <>
    <Link className='btn btn-outline-dark rounded btn-sm my-3' to='/'>back</Link>
    {
        details?(
            <Row className='my-3'>
          <Col md={3}>
            <Image className='img' src={details.photograph} alt={details.name} fluid />
          </Col>
          <Col md={3}>
      <ListGroup.Item>
        <h2>{details.name}</h2>
        <p>{details.neighborhood}</p>
      </ListGroup.Item>
      <ListGroup.Item>
     <p>cuisine_type:{details.cuisine_type}</p>
      </ListGroup.Item>
      <ListGroup.Item>
     <p>Address:{details.address}</p>
      </ListGroup.Item>
          </Col>
          <Col md={3}>
            <h4>Operating hours</h4>
            <p>Monday:{details.operating_hours.Monday}</p>
            <p>Tusday:{details.operating_hours.Tuesday}</p>
            <p>Wensday:{details.operating_hours.Wednesday}</p>
            <p>Thursday:{details.operating_hours.Thursday}</p>
            <p>Friday:{details.operating_hours.Friday}</p>
            <p>Saturday:{details.operating_hours.Saturday}</p>
            <p>Sunday:{details.operating_hours.Sunday}</p>
          </Col>
         
         <Row>
            <Card className='my-3 mx-3 p-3 rounded'>
                <Rating data={details.reviews} />
            </Card>
         </Row>
     
            </Row>
           
        )
    
        :"null"
    }
    </>
  )
}

export default Hoteldeatails