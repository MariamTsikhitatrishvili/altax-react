function ProductDesc({product}) {
  return (
    <div 
    className={`text-white mt-4 p-4`}
    style={{
        'backgroundColor':`${product['bg_image URL']}`
    }}
    >{product.desc}
    </div>
  )
}

export default ProductDesc