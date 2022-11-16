import { useState } from "react"
import ProductDesc from "./ProductDesc"

function ProductSvitcher({ subProducts, setActiveProductIndex }) {
    const [activeProduct, setActiveProduct] = useState(0)
    console.log(subProducts[0])
    return (
        <div className="md:m-8 m-3">
            <div className="z-200 flex">
                {
                    subProducts.map((item, ind) =>
                        <div
                            className={`cursor-pointer hover:opacity-70 duration-200 text-white p-4 text-xl`} key={ind}
                            onClick={() => {
                                setActiveProduct(ind)
                                setActiveProductIndex(ind)
                            }}
                            style={{
                                'backgroundColor':`${item['bg_image URL']}`
                            }}
                            >
                            {item.title}
                        </div>
                    )
                }
            </div>
            <ProductDesc product={subProducts[activeProduct]} />
        </div>

    )
}

export default ProductSvitcher