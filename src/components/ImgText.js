import React from 'react'

const ImgText = ({image, text, text1}) => {
  return (
    <div>
      {/* <img src={`http://localhost:8080/${image["@link"]}`} class="img-fluid" alt="" /> */}
      {text}
      {text1}
    </div>
  )
}

export default ImgText