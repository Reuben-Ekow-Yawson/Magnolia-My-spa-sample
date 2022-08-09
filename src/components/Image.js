import React from 'react'

const Image = ({image}) => {
  console.log("imageeeee", image);
  return (
    <div className='img-rounded img-responsive'>
      {
        image.length > 0 && image.map((img)=>{
          console.log(img)
          return <img src={`http://localhost:8080/${img["@link"]}`} class="img-fluid" alt="" />
        })
      }
      
    </div>
  )
}

export default Image