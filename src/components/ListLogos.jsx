import l1 from '../assets/Clip path group.svg';
import l2 from '../assets/Company logo (1).svg';
import l6 from '../assets/Company logo (5).svg';
import l7 from '../assets/Company logo (6).svg';
import l8 from '../assets/Company logo (7).svg';
import l9 from '../assets/Company logo.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./logos.css"


const Logos = () => {
  const logos = [l1, l2, l6, l7, l8, l9];

  const settings = {
 
    infinite: true,
    slidesToShow: 4,
 
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
    <div className="container my-5">
        <div className="row justify-content-center">
     
        <Slider {...settings}>
      {logos.map((item, i) => (

         <div className="image-container col d-flex align-items-center justify-content-center" key={i}>
         <img src={item} alt={i} />
       </div>
       
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Logos;
