function ProductImage({image}) {

    
  return (
    image !== undefined && <div className="flex items-centerjustify-center md:w-unset mx-auto">
     <img src={image} alt="product-image" className="w-full p-10 max-h-screen object-contain"/>
    </div>
  )
}

export default ProductImage