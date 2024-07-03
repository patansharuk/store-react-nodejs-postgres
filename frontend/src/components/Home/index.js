import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import CustomNavbar from '../CustomNavbar'
import BannerSection from '../BannerSection'

const Home = () => {
    return <>
        <CustomNavbar />
        <Container>
            <Row>
                <Col className='mt-2'>
                    <BannerSection />
                </Col>
            </Row>
        </Container>
    </>
}

export default Home
