import React from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'

const TourDetails = () => {

  const { id } = useParams()

  //later use api
  const tour = tourData.find(tour => tour.id === id)

  const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour

  const { totalRating, avgRating } = calculateAvgRating(reviews)

  //fromate date 
  const option = { day: 'numeric', month: 'long', year: 'numeric' }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className='tour__content'>
                <img src={photo} alt='' />
                <div className='tour__info'>
                  <h2>{title}</h2>

                  <div className='d-flex align-items-center gap-5'>
                    <span className='tour__rating d-flex align-items-center gap-1 '>
                      <i className='ri-star-s-fill' style={{
                        color: "var(--secondary-color)"
                      }}></i>{avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? ('Not rated') : (<span> ({reviews.length})</span>)}
                    </span>
                    <span>
                      <i className='ri-map-pin-user-fill'></i>{address}
                    </span>
                  </div>

                  <div className="tour__extra__details">
                    <span><i className='ri-map-pin-2-line'>{city}</i></span>
                    <span><i className='ri-money-dollar-circle-line'>${price} /per person</i></span>
                    <span><i className='ri-group-line'>{maxGroupSize}</i></span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* tour review section */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form>
                    <div className='rating__group d-flex align-items-center gap-3 mb-4'>
                      <span><i className='ri-star-s-fill'></i>1</span>
                      <span><i className='ri-star-s-fill'></i>2</span>
                      <span><i className='ri-star-s-fill'></i>3</span>
                      <span><i className='ri-star-s-fill'></i>4</span>
                      <span><i className='ri-star-s-fill'></i>5</span>
                    </div>
                    <div className='review__input'>
                      <input type='text' placeholder='share your thoughts' />
                      <button className='btn primary__btn text-white' type='submit'>Submit</button>
                    </div>

                  </Form>
                  <ListGroup className='user__reviews'>
                    {
                      reviews?.map(reviews => (
                        <div className='review__item'>
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>Rafay</h5>
                                <p>{new Date('01-18-2023').toLocaleDateString('en-Us', option)}</p>
                              </div>
                              <span className='d-flex align-items-center'>
                                5<i className='ri-star-s-fill'></i>
                              </span>
                            </div>
                            <h6>Amazing tour</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
                {/* tour review section */}
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TourDetails