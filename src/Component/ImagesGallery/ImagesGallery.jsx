import React, { useEffect, useRef } from 'react'

export default function ImagesGallery() {
  // Gallery Images
  const containerRef = useRef(null);

  // useEffect(()=>{
  //   if(window){
  //     window.cloudinary.galleryWidget({
  //       container: containerRef.current,
  //       cloudName: 'dy8pp1s5f',
  //       aspectRatio: '16:9',
  //       mediaAssets: [
  //         {tag: 'gallery-images'}
  //       ],
  //       carouselStyle: 'indicators'
  //     }).render()
  //   }
  // }, [])

  return (
    <div>
        
        <div ref={containerRef} style={{width: '1200px', margin: 'auto'}}>
        
        </div>
    </div>
  )
}
