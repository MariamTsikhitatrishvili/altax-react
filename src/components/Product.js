import { useState, useEffect } from "react"
import ProductImage from "./ProductImage"
import ProductInfo from "./ProductInfo"
import ProductSvitcher from "./ProductSvitcher"
import { motion } from "framer-motion";


const rightFadeIn = {
    initial: {
        x: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.3
        }
    },
}



function Product({ product }) {
    const [activeProductIndex, setActiveProductIndex] = useState(0)
    const [img, setImg] = useState()


    useEffect(() => {
        product.subproducts.length >0 && setImg(product.subproducts[activeProductIndex]['image URL'])
    }, [activeProductIndex])

    return (
  <div className="lg:h-screen relative">
            <img src={product["bg_image URL"]} className="lg:absolute lg:block hidden w-full h-full top-0 left-0 object-cover" alt={product.title} />
            <div className="absolute w-full h-full z-0 top-0 left-0 gradient"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:absolute w-full h-full top-0 left-0 justify-between items-center z-20">
                <div className="md:col-span-3 flex flex-col justify-between w-full self-start z-10">
                    <ProductInfo title={product.title} longDesc={product.long_desc} shortDesc={product.short_desc} />
                    <ProductSvitcher subProducts={product?.subproducts} salePrice={product['flag_image URL']} price={product['image URL']} setActiveProductIndex={setActiveProductIndex} />
                </div>
                {
                    img && product.subproducts.length > 0 && <motion.div key={product.subproducts[activeProductIndex]['image URL']} className="md:col-span-2 z-20" variants={rightFadeIn} initial="initial" animate="animate" >
                        <ProductImage image={product.subproducts[activeProductIndex]['image URL']} />
                    </motion.div>
                }
            </div>
        </div>
    )
}

export default Product