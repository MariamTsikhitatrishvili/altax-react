function ProductDesc({ product }) {
  return (
    product && <div
      className={`text-white mt-4 p-4 w-full overflow-y-auto`}
      style={{
        'backgroundColor': `${product['bg_image URL']}`
      }}
    >
      {product?.desc}
    </div>
  )
}

export default ProductDesc