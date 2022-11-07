import ProductInfo from "./ProductInfo"

function Product({ product }) {
    return (
        <div className="h-screen relative">
            <img src={product["bg_image URL"]} className="absolute w-full h-full top-0 left-0 " alt={product.title} />
            <div className="absolute w-full h-full top-0 left-0 gradient"></div>
            <ProductInfo title={product.title} longDesc={product.long_desc} shortDesc={product.short_desc} />
        </div>
    )
}

export default Product