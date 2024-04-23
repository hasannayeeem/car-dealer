import React from 'react';
import './services.css'
import Loading from '../Shared/Loading/Loading';
import Inventory from '../Home/Inventory/Inventory';
import useProducts from '../../Hooks/useProducts';
import Service from './Service';

const Services = () => {
    const [products] = useProducts([]);
    if(!products.length){
        <Loading></Loading>
    }
    return (
        <div id='' className='container mb-5'>
            <h1 className='services-title mt-5 mb-4'>Our Services</h1>
            <div className='services-container '>
            {
                products.map(product => <Service
                    key={product._id}
                    product={product}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;