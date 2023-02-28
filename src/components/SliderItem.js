function SliderItem({ slide }) {
    return (
        <div className="flex flex-col md:flex-row md:p-0 p-4 items-center -mt-[70px] text-white">
            <div className="l">
                {
                    slide['Video URL'].length > 0 && <video autoPlay muted loop playsInline
                        src={slide['Video URL']} />
                }
            </div>
            <div className={`bg-${slide.background_color}flex flex-col gap-5 md:p-7 md:pt-0 pt-7`}>
                <div className="text-4xl">
                    {slide.title}
                </div>
                <hr />
                <p>{slide.desc}</p>
            </div>
        </div>
    )
}

export default SliderItem