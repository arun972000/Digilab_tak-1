/* eslint-disable react/prop-types */
import "./Features.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Features = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            }
        ]
    };
    return (
        <div className="container" style={{ paddingTop: 70 }}>
            <div className="feature-overall">
                <div className="text-center feature-content">
                    <h1 className="feature-h1">Elevating Card Programs with Cutting-Edge Technology</h1>
                    <p className="feature-p1">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="feature-content2 mt-3">
                        <p className="feature-p2">Compare all Pro features</p>
                        <i className="fa-solid fa-arrow-right feature-icon"></i>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: 90 }}>
                <Slider {...settings} >
                    <div className="col text-center">
                        <div className="feature-box">
                            <i className="fa-solid fa-globe"></i>
                            <h3 className="feature-h3">Globally Accepted</h3>
                            <p className="feature-p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="feature-box">
                            <i className="fa-solid fa-globe"></i>
                            <h3 className="feature-h3">Biometric Integrated</h3>
                            <p className="feature-p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="feature-box">
                            <i className="fa-solid fa-globe"></i>
                            <h3 className="feature-h3">Fully Secured</h3>
                            <p className="feature-p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        </div>
                    </div>
                </Slider>
            </div>


        </div>
    )
}

export default Features