import React, {  useState } from 'react';
import styles from './UploadImages.module.css'

const UploadImages = () => {

  const cloudName = 'dy8pp1s5f'; 
  const uploadPreset = 'imagenes_admins'; 

  const [imageUrl, setimageUrl] = useState(null);
  const [imageAlt, setimageAlt] = useState(null);


  const openWidgetCover = () => {
    const widget = window.cloudinary.createUploadWidget(
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

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName, 
        uploadPreset: uploadPreset,
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

  console.log(imageUrl)



  return (
    <div >
        <form>

          <button type="button" className={styles.leftButton} onClick={openWidgetCover}>
            Upload Image to Home
          </button>

          <button type="button" className={styles.leftButton} onClick={openWidget}>
            Upload Image
          </button>
        
        </form>


        <p>Aquí se mostrará la imagen resultante</p>
        {imageUrl && (
          <img src={imageUrl} alt={imageAlt} className="displayed-image" />
        )}

        <p>Hola</p>

    </div>
  );
};

export default UploadImages;





