import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

const Index = ({items}) => {
    // console.log(items)
    const [sliders, setSliders] = useState([])
    useEffect(() => {
      setSliders(items)
    }, [items])
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            accessibility:true
          },
        },
      ],
    }
  return (
    <div className="text-black px-6 mx-4">
      <Slider {...settings}>
        {sliders.map((item) => {
          return (
            <div
              key={item.name}
              data-aos="fade-up" data-aos-duration="1000"
              className="flex-imp py-4 bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg flex-col w-full items-center content-center justify-center shadow-md  px-4 bg-white"
            >
              <img src={item.image} alt="Logo" className="w-full mx-auto object-cover" effect="blur" />
              <h3 className="mt-8 font-bold text-xl">{item.name}</h3>
              <h4 className="mt-4 text-md">{item.position}</h4>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Index