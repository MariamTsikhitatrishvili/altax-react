import { useState, useEffect } from "react"
import ProductDesc from "./ProductDesc"

function ProductSvitcher({ subProducts, setActiveProductIndex, salePrice, price }) {
    const [activeProduct, setActiveProduct] = useState(0)
    const [hovered, setHovered] = useState(false)
    const [hoverInd, setHoverInd] = useState(null)
    // let style = ''
    // useEffect(() => {
    //     hovered ? setHoverStyle({ backgroundColor: 'white' }) : setHoverStyle({ backgroundColor: 'black' })
    // }, [hovered])

    return (
        subProducts && <div className="md:m-4 m-3">
            <div className="z-200 flex flex-wrap">
                {
                    subProducts.map((item, ind) =>
                        <div
                            className={`cursor-pointer bg-white duration-200 text-black high-caps border-r border-b border-slate-300 p-2 hover:bg-[${item['bg_image URL']}] text-sm w-[130px] text-center`} key={ind}
                            onClick={() => {
                                setActiveProduct(ind)
                                setActiveProductIndex(ind)
                            }}
                            onMouseEnter={() =>{
                                setHovered(true)
                                setHoverInd(ind)
                            }}
                            onMouseLeave={() => setHovered(false)}
                            style={{
                                backgroundColor: hovered && ind === hoverInd || ind === activeProduct ? `${item['bg_image URL']}` : 'white'
                            }}
                        >
                            {item.title}
                        </div>
                    )
                }
            </div>
            <ProductDesc price={price} salePrice={salePrice} product={subProducts[activeProduct]} />
        </div>

    )
}

export default ProductSvitcher