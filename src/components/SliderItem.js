function SliderItem({ slide }) {
    return (
        <div className="flex items-center -mt-[70px] text-white">
            <div className="w-2/3">
                {
                    slide['Video URL'].length > 0 && <video autoPlay muted loop playsInline
                        src={slide['Video URL']} />
                }
            </div>
            <div className={`bg-${slide.background_color} w-1/3 flex flex-col gap-5 p-7`}>
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