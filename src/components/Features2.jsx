import phone from "../assets/Scene 3-2 _ Matte (1) 1.png"
import frame from "../assets/Frame.png"
import stick from "../assets/Rectangle 31.png"
import "./Features2.css"
import { ProgressBar } from "react-bootstrap"

const Features2 = () => {
    return (
        <div className="container" style={{ paddingTop: 96, marginBottom:96}}>
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
            <div className="row" style={{ marginTop: 96 }}>
                <div className="col-md-12 col-lg-6" style={{marginBottom:32}}>
                    <div className="phone-container">
                        <img src={phone} alt="phone" className="img-fluid"/>
                        <img src={stick} alt="stcik" className="stick-image"/>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="cart-container">
                    
                        <div className="cart-content">
                        
                            <h4 className="f2-h4">Spending</h4>
                            <p className="f2-p1"><span><img src={frame} alt="frame" /></span> 9349 visa card</p>
                            <div className="f2-headFlex">
                                <h2 className="f2-h2">127.14</h2><span className="usd">USD</span>
                            </div>
                            <p className="f2-p1">vs last week<span>Last Purchased ( Feb 24 19:59 UTC-5 )</span></p>
                            <p className="f2-p2"><span style={{ marginRight: 50 }}>400 USD</span><span style={{ marginRight: 50 }}>1000 USD</span><span>5000 USD</span></p>
                            <ProgressBar>
                                <ProgressBar striped animated variant="success" now={33} key={1} />
                                <ProgressBar animated variant="warning" now={33} key={2} />
                                <ProgressBar  animated striped variant="danger" now={22} key={3} />
                            </ProgressBar>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features2