import { useState, useEffect } from "react"
import ProductImage from "./ProductImage"
import ProductInfo from "./ProductInfo"
import ProductSvitcher from "./ProductSvitcher"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const rightFadeIn = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.3
        }
    },
}

const leftFadeIn = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.3
        }
    },
}


function Product({ product }) {
    const [activeProductIndex, setActiveProductIndex] = useState(0)
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                control.start("animate");
            }, 100);
        } else {
            control.start("exit")
        }
    }, [control, inView]);


    return (
        <div className="h-screen relative">
            <img src={product["bg_image URL"]} className="absolute w-full h-full top-0 left-0 " alt={product.title} />
            <div className="absolute w-full h-full top-0 left-0 gradient"></div>
            <div className="flex absolute w-full h-full top-0 left-0 justify-between items-center">
                <motion.div key={"desc"} variants={leftFadeIn} initial="initial" animate={control} ref={ref} className="flex flex-col max-w-[60%]">
                    <ProductInfo flag={product['flag_image URL']} title={product.title} longDesc={product.long_desc} shortDesc={product.short_desc} />
                    <ProductSvitcher subProducts={product.subproducts} setActiveProductIndex={setActiveProductIndex} />
                </motion.div>
                <motion.div key={"img"} variants={rightFadeIn} initial="initial" animate={control} ref={ref} >
                    <ProductImage image={product.subproducts[activeProductIndex]['image URL']} />
                </motion.div>
            </div>
        </div>
    )
}

export default Product