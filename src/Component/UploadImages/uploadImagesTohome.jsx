import React, {  useState, useEffect, useRef } from 'react';
import styles from './UploadImages.module.css'

export default function uploadImagesTohome() {

    const cloudName = 'dy8pp1s5f'; 
    const uploadPreset = 'imagenes_admins'; 
  
    const [imageUrl, setimageUrl] = useState(null);
    const [imageAlt, setimageAlt] = useState(null);

    const openWidgetToHome = () => {
        const widget = cloudinary.createUploadWidget(
          {
            cloudName: cloudName, 
            uploadPreset: uploadPreset,
            tags: ["gallery-images"],
          },
          (error, result) => {
            if (result.event === "success") {
              setimageUrl(result.info.secure_url);
              setimageAlt(`Una imagen de ${result.info.original_filename}`);
            }
          }
        );
        widget.open();
      };
      
  return (
    <div>
        uploadImagesTohome
    
        <button type="button" className={styles.leftButton} onClick={openWidgetToHome}>
            Upload Image to Home
          </button>
    </div>
  )
}
