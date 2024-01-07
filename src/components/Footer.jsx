import ui from "../assets/Vector.svg"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="container">
            <div className="f-content1">
                <div className="f-text-1">
                    <div className="f-textarea">
                        <img src={ui} alt="ui" />
                        <p className="f-p1">Mode UI is a comprehensive design system that empowers designers and
                            developers to create cohesive and visually stunning user interfaces across various platforms and devices</p>
                    </div>
                </div>
            </div>
            <div className="f-content2">
                <div className="row justify-content-center">
                    <div className=" col-12 justify-content-center col-md-6 col-lg-2 mb-5">
                        <h5 className="f-h5" style={{ marginBottom: 30 }}>
                            Company
                        </h5>
                        <div className="p2-gap">
                            <p className="f-p2">About us</p>
                            <p className="f-p2">Pricing</p>
                            <p className="f-p2">Contact us</p>
                            <p className="f-p2">Features</p>
                        </div>
                    </div>
                    <div className=" justify-content-center col-12 col-md-6 col-lg-2 mb-5">
                        <h5 className="f-h5" style={{ marginBottom: 30 }}>
                            Product
                        </h5>
                        <div className="p2-gap">
                            <p className="f-p2">Figma design system</p>
                            <p className="f-p2">Ios kit</p>
                            <p className="f-p2">Android kit</p>
                            <p className="f-p2">Wireframe</p>
                        </div>
                    </div>
                    <div className="justify-content-center col-12 col-md-6 col-lg-2 mb-5">
                        <h5 className="f-h5" style={{ marginBottom: 30 }}>
                            Resources
                        </h5>
                        <div className="p2-gap">
                            <p className="f-p2">Templates</p>
                            <p className="f-p2">Landing pages</p>
                            <p className="f-p2">Documentation</p>
                            <p className="f-p2">Comp library</p>
                        </div>
                    </div>
                    <div className="justify-content-center col-12 col-md-6 col-lg-2 mb-5">
                        <h5 className="f-h5" style={{ marginBottom: 30 }}>
                            Legal
                        </h5>
                        <div className="p2-gap">
                            <p className="f-p2">Privacy policy</p>
                            <p className="f-p2">Terms & Conditions</p>
                            <p className="f-p2">Disclaimer</p>
                            <p className="f-p2">Affiliate programme</p>
                        </div>
                    </div>
                    <div className="justify-content-center col-12 col-md-6 col-lg-2 mb-5">
                        <h5 className="f-h5" style={{ marginBottom: 30 }}>
                            Support
                        </h5>
                        <div className="p2-gap">
                            <p className="f-p2">Help centre</p>
                            <p className="f-p2">Raise ticket</p>
                            <p className="f-p2">Report</p>
                            <p className="f-p2">Refund</p>
                        </div>
                    </div>
                    <div className="justify-content-center col-12 col-md-6 col-lg-2 mb-5">
                        <h5 className="f-h5" style={{ marginBottom: 30 }}>
                            Resources
                        </h5>
                        <div className="p2-gap">
                            <p className="f-p2">Templates</p>
                            <p className="f-p2">Landing pages</p>
                            <p className="f-p2">Documentation</p>
                            <p className="f-p2">Comp library</p>
                        </div>
                    </div>

                </div>
            </div>
            <footer className="bg-light text-center text-lg-start">
                
                    <p className=" text-center text-muted">© 2023 Mode UI Inc. All Rights Reserved.</p>
              
            </footer>
        </div>
    )
}

export default Footer