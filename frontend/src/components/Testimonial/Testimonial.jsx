import React from 'react'
// import Slider from 'react-scripts'
import { Row, Col } from 'reactstrap'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     autoplay: true,
    //     speed: 1000,
    //     swipeToSlide: true,
    //     autoplaySpeed: 2000,
    //     SlidesToShow: 3,
    //     responsive: [
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slideToShow: 2,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true,
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // }

    return (
        <>
            <Row>
                <Col lg='4'>
                    <div className='testimonial py-4 px-3'>
                        <div className='d-flex align-items-center justify-content-center gap-4 mt-3'>
                            <img src={ava01} className='w-50 h-50 rounded' alt='' />
                        </div>
                        <div className='text-center'>
                            <h5 className='my-3'>John Doe</h5>
                            <p>"Traveling with this agency was a symphony of joy and discovery. The harmonious blend of destinations and activities made for an unforgettable escapade."</p>
                        </div>
                    </div>
                </Col>
                <Col lg='4'>
                    <div className='testimonial py-4 px-3'>
                        <div className='d-flex align-items-center justify-content-center gap-4 mt-3'>
                            <img src={ava02} className='w-50 h-50 rounded' alt='' />
                        </div>
                        <div className='text-center'>
                            <h5 className='my-3'>Angelina</h5>
                            <p>"Our journey with this travel company was a tapestry of vibrant experiences. From bustling cities to serene landscapes, every step was an exploration of beauty and culture."
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg='4'>
                    <div className='testimonial py-4 px-3'>
                        <div className='d-flex align-items-center justify-content-center gap-4 mt-3'>
                            <img src={ava03} className='w-50 h-50 rounded' alt='' />
                        </div>
                        <div className='text-center'>
                            <h5 className='my-3'>Michael</h5>
                            <p>"This travel agency whisked us away on a sublime adventure! Their meticulous planning and deep knowledge of destinations ensured a seamless and unforgettable trip."</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Testimonial