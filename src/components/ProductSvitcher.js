import { useState } from "react"
import ProductDesc from "./ProductDesc"

function ProductSvitcher({ subProducts, setActiveProductIndex }) {
    const [activeProduct, setActiveProduct] = useState(0)
    return (
        subProducts && <div className="md:m-4 m-3">
            <div className="z-200 flex flex-wrap">
                {
                    subProducts.map((item, ind) =>
                        <div
                            className={`cursor-pointer hover:opacity-70 duration-200 text-white p-4 text-xl w-[190px] bg-opacity-80 text-center`} key={ind}
                            onClick={() => {
                                setActiveProduct(ind)
                                setActiveProductIndex(ind)
                            }}
                            style={{
                                'backgroundColor':`${item['bg_image URL']}B3`
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