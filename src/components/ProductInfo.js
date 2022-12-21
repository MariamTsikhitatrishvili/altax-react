function ProductInfo({ title, longDesc, shortDesc, flag }) {
  return (
    <div className="z-100 px-6 border-l-2 border-white text-white md:mx-4 md:mb-2 mt-4 m-3 ">
      <h2 className="text-4xl font-markBold high_caps">{title}</h2>
      <div className="my-1 text-sm">
        {longDesc},  {shortDesc}
      </div>
    </div>
  )
}

export default ProductInfo