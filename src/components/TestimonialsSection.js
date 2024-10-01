// src/components/TestimonialsSection.js
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import testimage1 from '../images/test--image-1.png';
import testimage2 from '../images/test--image-2.png';
import quoteimage1 from '../images/testimonial-quote.png';
import { FaStar } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,  // 2 slides per page
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,  // Mobile view will show 1 slide
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="testimonials-section text-white">
      <Container>
        <h2 className='section-heading'>Happy Stories from Happy Clients</h2>
      <Row>
      <Slider {...settings}>
          <div className="testimonial-box" data-aos="fade-up">
            <div className='quote-image'>
              <img src={quoteimage1} alt='quote'></img>
            </div>
            <h4>Exceptional Expertise and Seamless Collaboration</h4>
            <p>“We partnered with Alliance Mobile Apps for our iOS app, and the results were outstanding. Their team understood our business needs and delivered a user-friendly, high-performance app that exceeded our expectations. Their attention to detail and commitment to quality made the entire process smooth and efficient. We’ve seen significant growth in user engagement since the app’s launch, and we couldn’t be happier with the outcome.”</p>
            <div className='clients-sec'>
              <div className='clients-image'>
                <img src={testimage1} alt=''></img>
                <div className='clients-name'>
                  <h6>Sarah M</h6>
                  <p><span>CEO, Tech Innovators Inc.</span></p>
                </div>
              </div>
              <div className='stars'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>
          <div className="testimonial-box" data-aos="fade-down">
            <div className='quote-image'>
              <img src={quoteimage1} alt='quote'></img>
            </div>
            <h4>From Concept to Launch, Flawless Execution</h4>
            <p>“Alliance Mobile Apps helped us bring our app idea to life. From the initial concept phase to the final product launch, their team was professional, creative, and responsive. We opted for a cross-platform Flutter app, and they delivered a seamless experience on both iOS and Android. Their ongoing support post-launch has been invaluable in ensuring our app runs smoothly and continues to improve. Highly recommend!”</p>
            <div className='clients-sec'>
              <div className='clients-image'>
                <img src={testimage1} alt=''></img>
                <div className='clients-name'>
                  <h6>James R</h6>
                  <p><span> Founder, GreenWave Solutions</span></p>
                </div>
              </div>
              <div className='stars'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>  
          <div className="testimonial-box" data-aos="fade-up">
            <div className='quote-image'>
              <img src={quoteimage1} alt='quote'></img>
            </div>
            <h4>A Game-Changer for Our Business</h4>
            <p>“Working with Alliance Mobile Apps was a game-changer for our company. We needed a custom Android app that could handle complex user interactions, and they delivered a product that not only met but exceeded our expectations. Their technical expertise, clear communication, and ability to meet tight deadlines made the entire experience enjoyable. Our app is now the primary tool for engaging with our customers, and we’ve received nothing but positive feedback.”</p>
            <div className='clients-sec'>
              <div className='clients-image'>
                <img src={testimage2} alt=''></img>
                <div className='clients-name'>
                  <h6>Emily K</h6>
                  <p><span>COO, Urban Connect</span></p>
                </div>
              </div>
              <div className='stars'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>
          {/* Add more slides similarly here */}
        </Slider>
      </Row>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
