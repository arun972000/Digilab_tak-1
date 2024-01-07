import { Container, Row, Col } from 'react-bootstrap';
import backgroundImg from '../assets/Mesh.png';
import "./HeroSection.css"
import RippleButton from './RippleButton';

const HeroSection = () => {
    
    const contentStyle = {
        width: '631px',
        height: '460px',
        position: 'relative',
        margin: 'auto',
    };

    return (
        <Container className="text-center">
            <Row className="justify-content-center align-items-center flex-column">
                <Col style={contentStyle} className="img-container">
                    <div className="hero-text1 mt-5 mb-3">Seamless experience</div>
                    <div className="hero-text2 mb-3">Unleashing the Next Generation of Card Solutions</div>
                    <div className="hero-text3">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
                    <RippleButton onClick={e => console.log(e)}>Unlock your Card<span> <i className="fa-solid fa-arrow-right"></i></span></RippleButton>
                    <p className="hero-text4 mt-3">*No credit card required</p>
                    <img src={backgroundImg} alt="background" className="imageStyle" />
                </Col>
            </Row>
        </Container>
    );
};

export default HeroSection;

