
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowcaseImg1 from "../img/showcase/show-1.jpg"
import ShowcaseImg2 from "../img/showcase/show-2.jpg"
import ShowcaseImg3 from "../img/showcase/show-3.jpg"
import ShowcaseImg4 from "../img/showcase/show-4.jpg"
import ShowcaseImg5 from "../img/showcase/show-5.jpg"
import Title from './Title';


const ShowcaseSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    return (
        <section id="showcase" className="showcase-section">
            <div className="container">
                <div className="section-content">
                    <Title upperTitle="Love to see" lowerTitle="Our Showcase" />
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...settings}>
                                <div className="text-center">
                                    <img src={ShowcaseImg1} alt="App Showcase" />
                                </div>
                                <div className="text-center">
                                    <img src={ShowcaseImg2} alt="App Showcase" />
                                </div>
                                <div className="text-center">
                                    <img src={ShowcaseImg3} alt="App Showcase" />
                                </div>
                                <div className="text-center"> 
                                    <img src={ShowcaseImg4} alt="App Showcase" />
                                </div>
                                <div className="text-center">
                                    <img src={ShowcaseImg5} alt="App Showcase" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection


