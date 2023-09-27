import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css'

import tourData from '../assets/data/tours'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import NewsLetter from './../shared/Newsletter'
import { Container, Row, Col } from 'reactstrap'

const Tours = () => {

  const [pageCount, SetPageCount] = useState(0)
  const [page, SetPage] = useState(0)

  useEffect(() => {
    const pages = Math.ceil(5 / 4)
    SetPageCount(pages)
  }, [page])

  return (
    <>
      <CommonSection title={"All tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {
              tourData?.map(tour => (
                <Col lg='3' key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
            <Col lg='12'>
              <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                {[...Array(pageCount).keys()].map(number => (
                  <span
                    key={number}
                    onClick={() => SetPage(number)}
                    className={page === number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}

export default Tours