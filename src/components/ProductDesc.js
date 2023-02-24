import { motion } from "framer-motion";

const fadeIn = {
  initial: {
    // x: -50,
    opacity: 0,
  },
  animate: {
    // x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

function ProductDesc({ product, price, salePrice }) {
  const desc = product?.desc.split(":");
  console.log(product);

  return (
    product && (
      <div
        className={`text-black text-sm bg-white rounded-b-xl mt-4 w-full relative overflow-y-auto flex flex-col justify-between min-h-[450px]`}
      >
        <img
          src={process.env.PUBLIC_URL + `/images/Ornament-min.png`}
          className="w-full h-[100%] absolute top-0 left-0 opacity-90 object-cover z-10"
          alt="bg"
        />
        <div className="flex flex-col  overflow-hidden">
          <div className="flex justify-between items-center px-4 z-50">
            <div className="w-3/4 flex gap-5">
              <motion.div
                key={product.title}
                variants={fadeIn}
                initial="initial"
                animate="animate"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/images/${product.title.toLowerCase()}.jpg`
                  }
                  className="mb-2 rounded-b-xl z-20"
                  alt="cart"
                />
              </motion.div>

              <div className="mt-5 flex flex-col gap-1 text-xs whitespace-nowrap">
                <div>მოდელი:{salePrice?.split(" ")[0]}</div>
                <div>შტრიხკოდი: {salePrice?.split(" ")[1]}</div>
                <div className="flex items-center gap-2">
                  SAFETY DOC:
                  <img
                    src={process.env.PUBLIC_URL + `/images/pdf-icon.png`}
                    className="w-6"
                    alt="cart"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              {/* {salePrice && <div className="bg-red-700 text-white px-3 py-1">Sale</div>} */}
              <div className="flex gap-3 items-center font-markLight mr-5">
                {/* {
                salePrice && <div className="lg:text-3xl text-lg text-red-700 flex gap-3 items-center">
                  {salePrice} ₾
                  <div className="h-7 w-[1px] bg-slate-500"> </div>
                </div>
              } */}
                <p className="lg:text-3xl whitespace-nowrap text-lg text-gray-600 p-2 bg-white rounded-lg">
                  {price} ₾
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 mt-4">{desc[0].split("ზედა ნოტები")[0]}</div>
          <div className="mt-2 px-4 pb-2">
            <div className="flex gap-2 items-start">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-black"></div>
                <div className="whitespace-nowrap font-bold">ზედა ნოტები:</div>
              </div>
              <div>{desc[1]}</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-black"></div>
                <div className="whitespace-nowrap font-bold">შუა ნოტები:</div>
              </div>
              <div>{desc[2]}</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-black"></div>
                <div className="whitespace-nowrap font-bold">
                  ძირითადი ნოტები:
                </div>
              </div>
              <div>{desc[3]}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 border-t w-full relative">
          <div className="w-full h-[100%] bg-white z-10 absolute top-0 left-0"></div>
          <div className="flex items-center gap-2 text-xs z-30">
            <img
              src={process.env.PUBLIC_URL + "/images/france-flag.jpg"}
              className="w-6"
              alt="cart"
            />
            FRENCH PERFUME
          </div>
          <div className="flex items-center gap-2 text-xs z-30">
            <img
              src={process.env.PUBLIC_URL + "/images/italy-flag.jpg"}
              className="w-6"
              alt="cart"
            />
            ITALY DESIGN
          </div>
          <div className="flex items-center gap-2 text-xs z-30">
            <img
              src={process.env.PUBLIC_URL + "/images/polish-flag.jpg"}
              className="w-6"
              alt="cart"
            />
            MADE IN POLAND
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDesc;
