"use client";
import { Accordion, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay  } from '@fortawesome/free-solid-svg-icons'
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Experiences() {

return (
    <section className='experience-section py-5' id='experiences'>
        <Container>
            <h2 className='display-5 text-center mb-5'>EXPERIENCE PHARMACY LIVE</h2>
                <div className='experience-box position-relative'>
                    <div className='experience-bg'></div>
                    <div className='experience-circle position-absolute  '>
                        <h3 className='font-weight-bold  mb-md-5 h2 text-uppercase'>You Shop We Deliver</h3>
                        <a href='#products' className='text-black'>Order Now</a>
                    </div>
                    <button><FontAwesomeIcon icon={faCirclePlay} className='video-play-circle position-absolute display-3'/></button>
                </div>
                <Row className='my-5'>
                    <Col md = {6} >
                    <AnimationOnScroll duration={0.8} animateOnce={true} animateIn="animate__fadeInLeft">
                    <h2 className='mb-5 display-6'>OUR RECENT PHARMACIST  ARTICLES</h2>
                        <div className='d-lg-flex gap-3 mb-5'>
                            <img className='small-image-4 w-100 rounded mb-3' src={'/images/featured-image-4.jpg'} alt='' />
                            <p className='h5'>All medicines are dispensed from pharmacies licensed by the Egyptian ministry of health.</p>
                        </div>
                    </AnimationOnScroll>
                    
                    </Col>
                    <Col>
                    <AnimationOnScroll duration={0.8} animateOnce={true} animateIn="animate__fadeInRight">
                    <Accordion defaultActiveKey={0}>
                                <Accordion.Item eventKey={0} className='mb-3'>
                                    <Accordion.Header className='d-flex align-items-start'><span className='h6'>1.</span><h3 className='h6'>Climate Change May Hurt Babies Hearts</h3></Accordion.Header>
                                    <Accordion.Body>
                                    Climate change is melting ice, intensifying storms and bleaching coral reefs, and now, a new study suggests that it could also take a toll on babies hearts.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey={1} className='mb-3'>
                                    <Accordion.Header className='d-flex align-items-start'><span className='h6'>2.</span><h3 className='h6'>How Does a Person Freeze to Death?</h3></Accordion.Header>
                                    <Accordion.Body>
                                    has brought bitter cold even Arctic-like temperatures to parts of the Upper Midwest and Eastern US and this frigid air may have you feeling like you could freeze to death
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey={2}>
                                    <Accordion.Header className='d-flex align-items-start'><span className='h6'>3.  </span><h3 className='h6'>Womens Brains Are 3 Years Younger Than Mens Study Suggests</h3></Accordion.Header>
                                    <Accordion.Body>
                                    You ve heard of being young at heart but what about young in the brain A new study suggests that by at least one measure women s brains are biologically younger than mens of the same age.
                                    </Accordion.Body>
                                </Accordion.Item>
                        </Accordion> 
                        
                    </AnimationOnScroll>
                    </Col>
                </Row>
        </Container>
    </section>
);
}

export default Experiences;
