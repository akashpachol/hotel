import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Resturentcards({data}) {

  return (
    <div>
    <Link to={`deatails/${data.id}`}>
          <Card className='my-3 p-3 rounded'>
    <Card.Img variant="top" src={data.photograph} className="p-3" />
    <Card.Body>
      <Card.Title>{data.name}</Card.Title>
      <Card.Text>
      Location:{data.neighborhood}
      </Card.Text>
      <Card.Text>
      cuisine_type:{data.cuisine_type}
      </Card.Text>
    
    </Card.Body>
  </Card>
    </Link>
    </div>
  )
}

export default Resturentcards