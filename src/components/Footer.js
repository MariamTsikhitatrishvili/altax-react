import { useState, useMemo, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

import Pin from "./Pin";

import PLACES from "../places.json";
function Footer({ partners }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [popupInfo, setPopupInfo] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex < partners.length - 1 ? prevIndex + 1 : 0
      );
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const pins = useMemo(
    () =>
      PLACES.map((place, index) => (
        <Marker
          key={index}
          longitude={place.longitude}
          latitude={place.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(place);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  return (
    <div className="bg-slate-500 xl:h-screen flex flex-col justify-between py-10">
      <div className="lg:grid lg:grid-cols-4 flex flex-col-reverse justify-between lg:content-center">
        <div
          className="lg:col-span-3 pointer-events-auto lg:h-auto h-[500px] p-4"
          id="footer"
        >
          <Map
            mapboxAccessToken="pk.eyJ1IjoibWFyaWFtdHMiLCJhIjoiY2xidnlhZ2V2MDNvZDNucnd6MWJwaG5zZCJ9.FvQuKl1gvqhitwftJiEGXg"
            initialViewState={{
              longitude: 44.751456,
              latitude: 41.727541,
              zoom: 12,
            }}
            style={{ height: "100%" }}
            mapStyle="mapbox://styles/mapbox/light-v9"
            autoScrolling={false}
          >
            <GeolocateControl position="top-left" />
            <FullscreenControl position="top-left" />
            <NavigationControl position="top-left" />
            <ScaleControl />

            {pins}

            {popupInfo && (
              <Popup
                anchor="top"
                longitude={Number(popupInfo.longitude)}
                latitude={Number(popupInfo.latitude)}
                onClose={() => setPopupInfo(null)}
              >
                <div className="p-2 bg-white w-fit">
                  <div className="text-lg font-markBold">{popupInfo.title}</div>
                  {popupInfo.address && (
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <p className="font-markSemiBold">მისამართი: </p>
                      {popupInfo.address}
                    </div>
                  )}
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <p className="font-markSemiBold">სამუშაო საათები: </p>
                    {popupInfo.hours}
                  </div>
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <p className="font-markSemiBold">სამუშაო დღეები: </p>
                    {popupInfo.days}
                  </div>
                  <div className="flex items-center gap-2 whitespace-nowrap mb-2">
                    <p className="font-markSemiBold">საკონტაქტო ნომერი: </p>
                    {popupInfo.phone}
                  </div>
                  <img className="w-full" src={popupInfo.image} />
                </div>
              </Popup>
            )}
          </Map>
        </div>

        <div className="bg-slate-500 py-6 px-8 w-full flex flex-col items-center text-white">
          <div className="flex flex-col items-center justify-between  mb-4">
            <img
              src={process.env.PUBLIC_URL + "/images/extra-logo.svg"}
              className="mb-4"
              alt="Extra logo"
            />
            <div className="flex flex-col items-center gap-4">
              <p className="font-markLight  md:text-base text-sm text-center">
                ონლაინ შეძენის შემთხვევაში ეწვიეთ EXTRA.Ge-ს, სადაც
                განთავსებულია "ვინოვეს" ყველა მოდელი და ისარგებლებთ
                განსხვავებული პირობებით, მიტანა 24 საათში თბილისში სრულიად{" "}
                <span className="bg-green-400">უფასოდ</span> რეგიონებში 3 დღეში.
                ასევე შეგიძლიათ ისარგებლოთ VISA-ს და MASTERCARD-ის ფასდაკლებით.
              </p>
              <div className="bg-red-600 hover:opacity-70 duration-200 flex items-center gap-2 p-2 cursor-pointer">
                <img
                  src={process.env.PUBLIC_URL + "/images/cart.svg"}
                  className="w-4"
                  alt="cart"
                />
                შეძენა
              </div>
            </div>
          </div>
          <p className="bg-purple-600 p-2 text-bold text-center">
            "ვინოვეს" პროდუქციის სტენდები განთავსებულია შემდეგ პარტნიორ
            ობიექტებში :
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-end w-full gap-3 mb-4">
          <div
            ref={prevRef}
            className=" cursor-pointer hover:bg-[#e3000f] rounded-full border-2 duration-200 border-white shadow-sm w-8 h-8 flex items-center justify-center"
          >
            <img
              src={process.env.PUBLIC_URL + `/images/arrow.svg`}
              className="rotate-180 w-3"
              alt="arrow"
            />
          </div>
          <div
            ref={nextRef}
            className="cursor-pointer hover:bg-[#e3000f] rounded-full border-2 duration-200 border-white shadow-sm w-8 h-8 flex items-center justify-center"
          >
            <img
              src={process.env.PUBLIC_URL + `/images/arrow.svg`}
              className="w-3"
              alt="arrow"
            />
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
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              slidesPerView: 3.5,
            },
            600: {
              slidesPerView: 4.5,
            },
            1024: {
              slidesPerView: 5.7,
            },
          }}
        >
          {partners.map((partner, ind) => (
            <SwiperSlide
              //   className="w-44"
              // className={`cursor-pointer bg-white duration-200 text-black high-caps border border-slate-300 p-2 text-sm w-[130px] text-center`}
              key={ind}
              className="p-6 flex items-center justify-center"
            >
              <img
                src={partner["image URL"]}
                className={`item ${
                  activeIndex === ind ? "active bg-contain" : ""
                }`}
                alt="partner"
                key={ind}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Footer;
