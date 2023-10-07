import React, { useState } from 'react'
import CommonSection from './../shared/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import TourCard from '../shared/TourCard'
import { useLocation } from 'react-router-dom'
import NewsLetter from './../shared/Newsletter '

const SearchResultList = () => {

  const location = useLocation()
  const [data] = useState(location.state)


  return (
    <>
      <CommonSection title={"Tour Serach REsult"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className='text-center'>No tour found</h4>
            ) : (
              data?.map(tour => (
                <Col lg='4' className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )

            }
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}

export default SearchResultList