function SliderItem({ slide }) {
    return (
        <div className="flex flex-col md:flex-row md:p-0 p-4 items-center -mt-[70px] text-white">
            <div className="md:w-2/3 w-full">
                {
                    slide['Video URL'].length > 0 && <video autoPlay muted loop playsInline
                        src={slide['Video URL']} />
                }
            </div>
            <div className={`bg-${slide.background_color} md:w-1/3 w-full flex flex-col gap-5 p-7`}>
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