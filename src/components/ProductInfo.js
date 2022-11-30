function ProductInfo({ title, longDesc, shortDesc, flag }) {
  return (
    <div className="z-100 px-6 py-2 border-l-4 border-white text-white md:m-4 m-3 ">
      <h2 className="text-4xl font-markBold high_caps">{title}</h2>
      <div className="my-4">
        {longDesc}
      </div>
      <div className="bg-white text-black p-2 flex gap-3 items-center">
        <img src={flag} alt="flag" className="w-10"/>
        {shortDesc}
      </div>
    </div>
  )
}

export default ProductInfo