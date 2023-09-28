import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export default function UploadImages() {

    const [url_imagen, seturl_imagen] = useState("");

  const changeUploadImage = async (event)=>{
    const file = event.target.files[0];
    console.log(file)

    // create set
    const data = new FormData();
    
    // Methods of the set
    data.append("file", file);
    data.append("upload_preset", "imagenes_admins")

    // Upload a image to cloudinary
    const response = await axios.post("https://api.cloudinary.com/v1_1/dy8pp1s5f/image/upload", data)

    console.log(response.data)
    seturl_imagen(response.data.secure_url)
  }

  // Delete image state
  const functionDeleteImage = ()=>{
    seturl_imagen("");
  };

  
  return (
    <div>
    UploadImages     
    
    <h1>Seleccionar una imagen</h1>
    
      <input type="file" accept='image/*' onChange={changeUploadImage} />
      
      {
      url_imagen &&  
      (<div>
        <img src={url_imagen} alt="" />
        <button onClick={()=> functionDeleteImage()}>Eliminar Imagen</button>
      </div>)
      }


    </div>
  )
}
