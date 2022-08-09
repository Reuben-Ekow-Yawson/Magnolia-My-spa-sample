import React from 'react'

const TextImage = ({img, text}) => {
    console.log(img, "aaaaa");
  return (
    <div>
       <img src={`http://localhost:8080/${img["@link"]}`} class="img-fluid" alt="" />
        {text}
    </div>
  )
}

export default TextImage