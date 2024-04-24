import React from 'react';
import './services.css'
import Loading from '../Shared/Loading/Loading';
import Service from './Service';
import useServices from '../../Hooks/useServices';

const Services = () => {
    const [services] = useServices([]);
    if(!services.length){
        <Loading></Loading>
    }
    return (
        <div id='' className='container mb-5'>
            <h1 className='services-title mt-5 mb-4'>Our Services</h1>
            <div className='services-container '>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;