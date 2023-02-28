import Slider from "react-slick";
import SliderItem from "./SliderItem";
import YoutubeVideosList from "./YoutubeVideosList";

function HeaderSlider({ slides }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div>
      <Slider {...settings} arrows={false}>
        {slides &&
          slides.map((slide, ind) => <SliderItem key={ind} slide={slide} />)}
      </Slider>
      {/* <YoutubeVideosList /> */}
    </div>
  );
}

export default HeaderSlider;
