function ProductDesc({ product }) {
  const desc = product?.desc.split(":")
  console.log(product)

  return (
    product && <div
      className={`text-black bg-white rounded-b-xl mt-4 w-full overflow-y-auto`}
      style={{
        "&:hover": {
          background: `${product['bg_image URL']}`
        },
      }}
    >
      <img src={process.env.PUBLIC_URL + `/images/${product.title.toLowerCase()}.jpg`} className="w-full" alt="cart" />
      <div className="px-4">
        {desc[0].split("ზედა ნოტები")[0]}
      </div>
      <div className="mt-2 px-4">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-black"></div>
          <div>ზედა ნოტები:</div>
          <div>{desc[1]}</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-black"></div>
          <div>შუა ნოტები:</div>
          <div>{desc[2]}</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-black"></div>
          <div>ძირითადი ნოტები:</div>
          <div>{desc[3]}</div>
        </div>
      </div>
      <div className="flex items-center gap-3 px-4 py-2 mt-2 border-t w-fit">
        <div className="flex items-center gap-2 text-sm">
          <img src={process.env.PUBLIC_URL + '/images/france-flag.jpg'} className="w-6" alt="cart" />
          FRENCH PERFUME
        </div>
        <div className="flex items-center gap-2 text-sm">
          <img src={process.env.PUBLIC_URL + '/images/italy-flag.jpg'} className="w-6" alt="cart" />
          ITALY DESIGN
        </div>
        <div className="flex items-center gap-2 text-sm">
          <img src={process.env.PUBLIC_URL + '/images/polish-flag.jpg'} className="w-6" alt="cart" />
          MADE IN POLAND
        </div>
      </div>
    </div>
  )
}

export default ProductDesc