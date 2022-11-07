function ProductInfo({ title, longDesc, shortDesc }) {
  return (
    <div className="z-100 absolute px-6 border-l-4 border-white text-white m-8 max-w-[60%]">
      <h2 className="text-2xl font-markBold">{title}</h2>
      <div className="my-4">
        {longDesc}
      </div>
      <div className="bg-white text-black p-2">
        {shortDesc}
      </div>
    </div>
  )
}

export default ProductInfo