import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured tours/FeaturedTourList'
import experienceImg from '../assets/images/experience.png'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonial from '../components/Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
    <>
      {/*  hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtitle subtitle={'Know before you go'} />
                  <img src={worldImg} alt='' />
                </div>
                <h1>Traveling opens the door to creating
                  <span className='highlight'> memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, exercitationem totam. Quod, quisquam dolorum non, facilis eum totam magnam omnis rerum sunt est, odit aut fugiat culpa excepturi nisi quasi.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className='hero__img-box'>
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className='hero__img-box hero__video-box mt-4'>
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className='hero__img-box mt-5'>
                <img src={heroImg2} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/*  hero section end */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitles'>What we serve</h5>
              <h2 className='servies__title'>we offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* feature tour section start  */}
      <section >
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'>Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>

      </section>
      {/* feature tour section end */}

      {/* experiece section start */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  deleniti recusandae magni neque ullam!
                </p>

                <div className='counter__wrapper d-flex align-items-center gap-5'>
                  <div className='counter__box'>
                    <span>12k+</span>
                    <h6>Successfull trips</h6>
                  </div>
                  <div className='counter__box'>
                    <span>2k+</span>
                    <h6>Regular clients</h6>
                  </div>
                  <div className='counter__box'>
                    <span>15</span>
                    <h6>Years of experience</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className='experience__img'>
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* experiece section end */}
      {/* gallery section start */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={"Gallery"} />
              <h2 className='gallery__title'>
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* gallery section end */}

      {/* testimonial section start */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fan Love'} />
              <h2 className="testimonial__title"> What our fans say about us </h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>
      {/* testimonial section end */}

      {/* newsletter section start */}
      <Newsletter />
      {/* newsletter section end */}

    </>

  )
}

export default Home