import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Cetagories.css';

const Cetagories = () => {
    return (
        <div className='container'>
            <h3 className='pt-5 pb-3 cetagories-title'>Browse our categories</h3>
            <hr />
            <Row xs={1} md={3} lg={5} className={`g-lg-5 g-3 pb-5 pt-3`}>
                <Col>
                    <div className='column'>
                        <h6 className='ctg-title'>Automobiles</h6>
                        <ul className='ctg-items'>
                            <li>Buses</li>
                            <ul className='ctg-subitems'>
                                <li>Commercial</li>
                                <li>School</li>
                            </ul>
                            <li>Cars</li>
                            <ul className='ctg-subitems pb-5'>
                                <li>Audi</li>
                                <li>BMW</li>
                                <li>Hyundai</li>
                                <li>Mazda</li>
                                <li>Mercedes</li>
                            </ul>
                        </ul>
                    </div>
                </Col>
                <Col className=''>
                    <div className='column'>
                        <h6 className='ctg-title'>Electronics</h6>
                        <ul className='ctg-items'>
                            <li>Airconditioner</li>
                            <ul className='ctg-subitems'>
                                <li>Carrier</li>
                                <li>Hitachi</li>
                                <li>Samsung</li>
                            </ul>
                            <li>Mobiles</li>
                            <ul className='ctg-subitems pb-5'>
                                <li>Apple</li>
                                <li>Microsoft</li>
                                <li>Samsung</li>
                            </ul>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className='column'>
                        <h6 className='ctg-title'>Pets</h6>
                        <ul className='ctg-items'>
                            <li>Cats</li>
                            <li>Dogs</li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className='column'>
                        <h6 className='ctg-title'>Properties</h6>
                        <ul className='ctg-items'>
                            <li>Farm House</li>
                            <li>House</li>
                            <li>Villa</li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className='column'>
                        <h6 className='ctg-title'>Services</h6>
                        <ul className='ctg-items'>
                            <li>Air Conditioner</li>
                            <li>Plumber Service</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Cetagories;