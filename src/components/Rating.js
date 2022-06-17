import React from 'react'

function Rating({data}) {
  return (
    <div>
        {
      data.map((item)=>(
        <div>
            <div>
         <span>     <h5>  {item.name}</h5></span>
            </div>
            <div>
              <p>  {item.date}</p>
              <p>  {item.comments}</p>
              <p>  {item.rating}</p>
              
            </div>
        </div>
      ))
        }
    </div>
  )
}

export default Rating