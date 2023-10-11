import React from 'react'
import TourCard from '../../shared/TourCard'
import { Col } from 'reactstrap'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'

const FeaturedTourList = () => {

    const { data: featuredTour, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)
    console.log(featuredTour)

    return (
        <>
            {
                loading && <h4>Loading.....</h4>
            }
            {
                error && <h4>{error}</h4>
            }
            {!loading && !error && featuredTour?.map((item, key) => {
                return (
                    <Col lg='3' md='6' sm='6' className='mb-4' key={item._id}>
                        <TourCard tour={item} />
                    </Col>
                )
            })}
        </>
    )
}

export default FeaturedTourList