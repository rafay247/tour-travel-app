import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css'

import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import NewsLetter from './../shared/Newsletter'
import { Container, Row, Col } from 'reactstrap'

import useFetch from '../hooks/useFetch'
import BASE_URL from '../utils/config'

const Tours = () => {

  const [pageCount, SetPageCount] = useState(0)
  const [page, SetPage] = useState(0)
  const { data: tours, loading, error } = useFetch(`${BASE_URL}tours?page=${page}`)
  const { data: tourCount } = useFetch(`${BASE_URL}tours/search/getTourCount`)

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8)
    SetPageCount(pages)
    window.scrollTo(0, 0)
  }, [page, tourCount, tours])

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
          {
            loading && <h4 className='text-center pt-5'> loading.......</h4>
          }
          {
            error && <h4 className='text-center pt-5'> {error}</h4>
          }
          {
            !loading && !error && <Row>
              {
                tours?.map(tour => (
                  <Col lg='3' key={tour._id}>
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
          }
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}

export default Tours