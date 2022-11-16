function ProductImage({image}) {

    
  return (
    image !== undefined && <div className="flex items-centerjustify-center md:w-unset w-1/2 mx-auto">
     <img src={image} alt="product-image"/>
    </div>
  )
}

export default ProductImage