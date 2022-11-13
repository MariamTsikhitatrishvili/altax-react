import { useEffect, useState } from "react"
import ProductImage from "./ProductImage"
import ProductInfo from "./ProductInfo"
import ProductSvitcher from "./ProductSvitcher"


function Product({ product }) {
    const [activeProductIndex, setActiveProductIndex] = useState(0)

    return (
        <div className="h-screen relative">
            <img src={product["bg_image URL"]} className="absolute w-full h-full top-0 left-0 " alt={product.title} />
            <div className="absolute w-full h-full top-0 left-0 gradient"></div>
            <div className="flex absolute w-full h-full top-0 left-0 justify-between items-center">
                <div className="flex flex-col max-w-[60%]">
                    <ProductInfo flag={product['flag_image URL']} title={product.title} longDesc={product.long_desc} shortDesc={product.short_desc} />
                    <ProductSvitcher subProducts={product.subproducts} setActiveProductIndex={setActiveProductIndex} />
                </div>
                <ProductImage image={product.subproducts[activeProductIndex]['image URL']} />
            </div>
        </div>
    )
}

export default Product