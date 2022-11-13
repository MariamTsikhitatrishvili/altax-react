import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const animate = {
    initial: {
        x: -100,
    },
    animate: {
        x: 0,
        transition: {
            delay: 1
        }
    },
}
function ProductImage({image}) {
    const [imageSrc, setImageSrc] = useState(image)

    useEffect(() => {
        setImageSrc(image)
    }, [image])
    
  return (
    imageSrc !== undefined && <motion.div variants={animate} initial="initial" animate="animate">
     <motion.img variants={animate} initial="initial" animate="animate" src={imageSrc} alt="product-image" />
    </motion.div>
  )
}

export default ProductImage