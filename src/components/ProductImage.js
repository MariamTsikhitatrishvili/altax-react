import { useEffect, useState } from "react"


function ProductImage({image}) {
    const [imageSrc, setImageSrc] = useState(image)

    useEffect(() => {
        setImageSrc(image)
    }, [image])
    
  return (
    imageSrc !== undefined && <div >
     <img src={imageSrc} alt="product-image" />
    </div>
  )
}

export default ProductImage