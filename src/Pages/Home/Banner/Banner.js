import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner1.jpg'
import banner2 from '../../../images/Banner/banner2.jpg'
import banner3 from '../../../images/Banner/banner3.jpg'
const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img style={{ height: 500 }}
                    className="d-block w-100 "
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>HOME MADE & HALAL FOOD ONLINE IN DHAKA</h3>
                    <p>Special Offer.....20% off in all items </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: 500 }}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Vegetable curt</h3>
                    <p>Those who search Halal food online primarily in Dhaka, then this site is for you. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: 500 }}
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>We believe in quality</h3>
                    <p>Give your order whatever halal food you like to have. just message inbox with your requirements & give your address detail we will share the price & send through online delivery. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;