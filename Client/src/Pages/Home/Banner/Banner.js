import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner5 from '../../../images/banner/banner5.jpg'
import banner1 from '../../../images/banner/banner1.jpg'
import bnr2 from '../../../images/banner/bnr2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
// import banner4 from '../../../images/banner/banner4.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img height="545px"
                    className="d-block w-100 "
                    src={banner5}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height="545px"
                    className="d-block w-100"
                    src={bnr2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height="545px"
                    className="d-block w-100"
                    src={banner3}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    height="545px"
                    className="d-block w-100"
                    src={banner4}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
                <img
                    height="545px"
                    className="d-block w-100"
                    src={banner1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3></h3>
                    <p>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};



export default Banner;