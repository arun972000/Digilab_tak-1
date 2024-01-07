/* eslint-disable react/no-unescaped-entities */
import "./Testimonial.css"
import wise from "../assets/Company logo (3).svg"
import avtor from "../assets/Base avatars.png"
import star from "../assets/Framestart.svg"


const Testimonial = () => {
    return (
        <div className="container" style={{ marginTop: 96, marginBottom: 96 }}>
            <div className="t-content">
                <div className="t-box-1">
                    <img src={wise} alt="wise" />
                    <h3 className="t-h3">I had the pleasure of experiencing the next generation of card solutions with
                        this incredible product. It's refreshing to see such innovation in the financial industry.</h3>
                </div>
                <div className="avatr-box">
                    <img src={avtor} alt="avtor" />
                    <div className="av-content">
                        <h6 className="t-h6">
                            Nick Babich
                        </h6>
                        <p className="t-p">Lead Designer</p>
                    </div>
                    <div className="star">
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial