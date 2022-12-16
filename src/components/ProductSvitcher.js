import { useState, useEffect } from "react"
import ProductDesc from "./ProductDesc"

function ProductSvitcher({ subProducts, setActiveProductIndex }) {
    const [activeProduct, setActiveProduct] = useState(0)
    const [hovered, setHovered] = useState(false)
    const [hoverStyle, setHoverStyle] = useState({ backgroundColor: 'red' })
    const [hoverInd, setHoverInd] = useState(null)
    // let style = ''
    useEffect(() => {
        hovered ? setHoverStyle({ backgroundColor: 'white' }) : setHoverStyle({ backgroundColor: 'black' })
    }, [hovered])

    return (
        subProducts && <div className="md:m-4 m-3">
            <div className="z-200 flex flex-wrap">
                {
                    subProducts.map((item, ind) =>
                        <div
                            className={`cursor-pointer bg-white duration-200 text-black high-caps border-r border-b border-slate-500 p-2 hover:bg-[${item['bg_image URL']}] text-xl w-[190px] text-center`} key={ind}
                            onClick={() => {
                                setActiveProduct(ind)
                                setActiveProductIndex(ind)
                                setHoverInd(ind)
                            }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        // style={{
                        //     'backgroundColor':`${item['bg_image URL']}B3`
                        // }}
                            // style={ind === activeProduct ? { hoverStyle } : { backgroundColor: 'white' }}
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