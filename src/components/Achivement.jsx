import "./Achivement.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Achivement = () => {
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
        <div className="container" style={{marginTop:96}}>
            <div className="row">
                <Slider {...settings}>
                    <div className="col">
                        <div className="achive-box">
                            <div className="a-content">
                                <h2 className="a-h2">2 Million</h2>
                                <h5 className="a-h5" style={{ marginTop: 16 }}>Customers</h5>
                                <p className="a-p1">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="achive-box">
                            <div className="a-content">
                                <h2 className="a-h2">1K</h2>
                                <h5 className="a-h5" style={{ marginTop: 16 }}>Downloads</h5>
                                <p className="a-p1">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="achive-box">
                            <div className="a-content">
                                <h2 className="a-h2">$73 Million</h2>
                                <h5 className="a-h5" style={{ marginTop: 16 }}>Transaction</h5>
                                <p className="a-p1">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="achive-box">
                            <div className="a-content">
                                <h2 className="a-h2">2.0</h2>
                                <h5 className="a-h5" style={{ marginTop: 16 }}>Latest Version</h5>
                                <p className="a-p1">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default Achivement