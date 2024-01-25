import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";

const MatchesCarausel = () => {

    const matchesList = [{ name: 'Match 1', }, {name: 'Match 2'}, {name: 'Match 3'}]

    const settings = {
        dots: true,
        infinite: false,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
        <Slider {...settings}>
            {
                <div>
                    {
                        matchesList.map((ele,index)=>(
                            <p className="text-3xl text-black">Nikhil</p>
                        ))
                    }
                </div>
            }
        </Slider>
    </div>
  )
}

export default MatchesCarausel