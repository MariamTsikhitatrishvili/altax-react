function ProductInfo({ title, longDesc, shortDesc, flag }) {
  return (
    <div className="z-100 px-6 py-2 border-l-4 border-white text-white md:m-4 m-3 ">
      <h2 className="text-2xl font-markBold high_caps">{title}</h2>
      <div className="my-2 text-sm">
        {longDesc},  {shortDesc}
      </div>
    </div>
  )
}

export default ProductInfo