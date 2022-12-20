import { useState, useRef } from "react"
import ProductDesc from "./ProductDesc"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


function ProductSvitcher({ subProducts, setActiveProductIndex, salePrice, price }) {
    const [activeProduct, setActiveProduct] = useState(0)
    const [hovered, setHovered] = useState(false)
    const [hoverInd, setHoverInd] = useState(null)

    const prevRef = useRef(null);
    const nextRef = useRef(null)
    // let style = ''
    // useEffect(() => {
    //     hovered ? setHoverStyle({ backgroundColor: 'white' }) : setHoverStyle({ backgroundColor: 'black' })
    // }, [hovered])

    return (
        subProducts && <div className="md:m-4 m-3 ">
            <div className="flex justify-end w-full gap-3 mb-4">
                <div ref={prevRef} className=" cursor-pointer hover:opacity-70 rounded-full border-2 duration-200 border-white shadow-sm w-8 h-8 flex items-center justify-center">
                    <img src={process.env.PUBLIC_URL + `/images/arrow.svg`} className="rotate-180 w-3" alt="arrow" />
                </div>
                <div ref={nextRef} className="cursor-pointer hover:opacity-70 rounded-full border-2 duration-200 border-white shadow-sm w-8 h-8 flex items-center justify-center">
                    <img src={process.env.PUBLIC_URL + `/images/arrow.svg`} className="w-3" alt="arrow" />
                </div>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={6.7}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    subProducts.map((item, ind) =>
                        <SwiperSlide
                            className={`cursor-pointer bg-white duration-200 text-black high-caps border border-slate-300 p-2 text-sm w-[130px] text-center`} key={ind}
                            onClick={() => {
                                setActiveProduct(ind)
                                setActiveProductIndex(ind)
                            }}
                            onMouseEnter={() => {
                                setHovered(true)
                                setHoverInd(ind)
                            }}
                            onMouseLeave={() => setHovered(false)}
                            style={{
                                backgroundColor: hovered && ind === hoverInd || ind === activeProduct ? `${item['bg_image URL']}B3` : 'white',
                                // borderColor: hovered && ind === hoverInd || ind === activeProduct ? `${item['bg_image URL']}B3` : 'gray',
                            }}
                        >
                            {item.title}
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <ProductDesc price={price} salePrice={salePrice} product={subProducts[activeProduct]} />
        </div>

    )
}

export default ProductSvitcher