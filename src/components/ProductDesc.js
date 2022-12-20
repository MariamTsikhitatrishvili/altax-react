function ProductDesc({ product, price, salePrice }) {
  const desc = product?.desc.split(":")
  console.log(product)

  return (
    product && <div
      className={`text-black text-sm bg-white rounded-b-xl mt-4 w-full overflow-y-auto flex flex-col justify-between min-h-[420px]`}
      style={{
        "&:hover": {
          background: `${product['bg_image URL']}`
        },
      }}
    >
      <div className="flex justify-between items-center px-4">
        <img src={process.env.PUBLIC_URL + `/images/${product.title.toLowerCase()}.jpg`} className="w-3/5 mb-2 rounded-b-xl" alt="cart" />

        <div className="flex flex-col items-end gap-2">
          {salePrice && <div className="bg-red-700 text-white px-3 py-1">Sale</div>}
          <div className="flex gap-3 items-center font-markLight mr-5">
            {
              salePrice && <div className="text-3xl text-red-700 flex gap-3 items-center">
                {salePrice} ₾
                <div className="h-7 w-[1px] bg-slate-500"> </div>
              </div>
            }
            <p className="text-3xl text-gray-600">
              {price} ₾
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mt-4">
        {desc[0].split("ზედა ნოტები")[0]}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="mt-2 px-4">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <div className="whitespace-nowrap">ზედა ნოტები:</div>
              <div>{desc[1]}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <div className="whitespace-nowrap">შუა ნოტები:</div>
              <div>{desc[2]}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <div className="whitespace-nowrap">ძირითადი ნოტები:</div>
              <div>{desc[3]}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 mt-4 border-t w-fit">
            <div className="flex items-center gap-2 text-xs">
              <img src={process.env.PUBLIC_URL + '/images/france-flag.jpg'} className="w-6" alt="cart" />
              FRENCH PERFUME
            </div>
            <div className="flex items-center gap-2 text-xs">
              <img src={process.env.PUBLIC_URL + '/images/italy-flag.jpg'} className="w-6" alt="cart" />
              ITALY DESIGN
            </div>
            <div className="flex items-center gap-2 text-xs">
              <img src={process.env.PUBLIC_URL + '/images/polish-flag.jpg'} className="w-6" alt="cart" />
              MADE IN POLAND
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDesc