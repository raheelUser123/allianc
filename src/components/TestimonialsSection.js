// src/components/TestimonialsSection.js
import React from 'react';
import { Container } from 'react-bootstrap';
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
        <h2 className='section-heading'>What Our Clients Say</h2>
        <Slider {...settings}>
          <div className="testimonial-box" data-aos="fade-up">
            <div className='quote-image'>
              <img src={quoteimage1} alt='quote'></img>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec</p>
            <div className='clients-sec'>
              <div className='clients-image'>
                <img src={testimage1} alt=''></img>
                <div className='clients-name'>
                  <h6>Brooklyn Simmons</h6>
                  <p><span>Pendron.Inc, CEO</span></p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec</p>
            <div className='clients-sec'>
              <div className='clients-image'>
                <img src={testimage1} alt=''></img>
                <div className='clients-name'>
                  <h6>Brooklyn Simmons</h6>
                  <p><span>Pendron.Inc, CEO</span></p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec</p>
            <div className='clients-sec'>
              <div className='clients-image'>
                <img src={testimage2} alt=''></img>
                <div className='clients-name'>
                  <h6>Jenny Wilson</h6>
                  <p><span>Bettero.Inc, CEO</span></p>
                </div>
              </div>
              <div className='stars'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>
          {/* Add more slides similarly here */}
        </Slider>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
