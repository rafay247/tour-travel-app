import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import wheaterImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: wheaterImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis ad accusamus modi voluptatibus, pariatur culpa dolorum totam quisquam maiores atque sed ex praesentium commodi suscipit doloremque assumenda eius dicta."
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis ad accusamus modi voluptatibus, pariatur culpa dolorum totam quisquam maiores atque sed ex praesentium commodi suscipit doloremque assumenda eius dicta."
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis ad accusamus modi voluptatibus, pariatur culpa dolorum totam quisquam maiores atque sed ex praesentium commodi suscipit doloremque assumenda eius dicta."
    },
]
const ServiceList = () => {
    return (
        <>
            {serviceData.map((item, index) => {
                return <Col lg='3' key={index}>
                    <ServiceCard item={item} />

                </Col>
            })}
        </>
    )
}

export default ServiceList