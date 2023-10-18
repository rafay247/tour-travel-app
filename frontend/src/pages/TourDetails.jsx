import React, { useState, useRef, useEffect, useContext } from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../utils/config'
import { AuthContextt } from '../context/AuthContext'

const TourDetails = () => {

  const { id } = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)
  const { user } = useContext(AuthContextt)

  const { data: tour, error, loading } = useFetch(`${BASE_URL}/tour/:${id}`)

  const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour

  const { totalRating, avgRating } = calculateAvgRating(reviews)

  //fromate date 
  const option = { day: 'numeric', month: 'long', year: 'numeric' }

  const submitHandler = async e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value
    if (!user || user === undefined || user === null) {
      alert('please sign in')
    }
    const reviewObj = {
      username: user?.username,
      reviewText,
      rating: tourRating
    }

    try {
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      })
      const result = await res.json()
      if (!res.ok) return alert(result.message)
      alert(result.message)

    } catch (error) {
      alert(error.message)
    }


  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tour])
  return (
    <>
      <section>
        <Container>
          {
            loading && <h4 className='text-center pt-5'> loading.......</h4>
          }
          {
            error && <h4 className='text-center pt-5'> {error}</h4>
          }
          {!loading && !error && (<Row>
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
                    <span><i className='ri-map-pin-2-line p-1'></i>{city}</span>
                    <span><i className='ri-money-dollar-circle-line'></i> ${price} /per person</span>
                    <span><i className='ri-map-pin-time-line'></i>{distance} km</span>
                    <span><i className='ri-group-line'></i>{maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* tour review section */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className='rating__group d-flex align-items-center gap-3 mb-4'>
                      <span onClick={() => setTourRating(1)}><i className='ri-star-s-fill'></i>1</span>
                      <span onClick={() => setTourRating(2)}><i className='ri-star-s-fill'></i>2</span>
                      <span onClick={() => setTourRating(3)}><i className='ri-star-s-fill'></i>3</span>
                      <span onClick={() => setTourRating(4)}><i className='ri-star-s-fill'></i>4</span>
                      <span onClick={() => setTourRating(5)}><i className='ri-star-s-fill'></i>5</span>
                    </div>
                    <div className='review__input'>
                      <input type='text' required ref={reviewMsgRef} placeholder='share your thoughts' />
                      <button className='btn primary__btn text-white' type='submit'>Submit</button>
                    </div>

                  </Form>
                  <ListGroup className='user__reviews'>
                    {
                      reviews?.map(review => (
                        <div className='review__item'>
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>{review.username}</h5>
                                <p>{new Date(review.createAt).toLocaleDateString('en-Us', option)}</p>
                              </div>
                              <span className='d-flex align-items-center'>
                                {review.rating}<i className='ri-star-s-fill'></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
                {/* tour review section */}
              </div>

            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>)
          }
        </Container>
      </section>
    </>
  )
}

export default TourDetails