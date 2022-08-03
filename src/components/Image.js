import React from 'react'

const Image = ({image}) => {
  console.log("imageeeee", image);
  return (
    <div className='img-rounded img-responsive'>
      <img src={`http://localhost:8080/${image["@link"]}`} class="img-fluid" alt="" />
    </div>
  )
}

export default Image