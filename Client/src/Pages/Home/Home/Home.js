import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Inventory from '../Inventory/Inventory';
import Subscribe from '../Subscribe/Subscribe';
import Cetagories from './Cetagories/Cetagories';
import Content from './Content/Content';
import './Home.css';
import Services from '../../Services/Services';
import Service from '../../Services/Service';
import useServices from '../../../Hooks/useServices';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useRole from '../../../Hooks/useRole';

const Home = () => {
    const [products, setProducts] = useProducts([]);
    const [services, setServices] = useServices([]);
	let [user, loading, error] = useAuthState(auth)
	let [role, roleLoading] = useRole(user)
    if (!products.length || !services.length) {
        <Loading></Loading>
    }
    return (
        <div className=''>
            <PageTitle title="HOME"></PageTitle>
            <Banner></Banner>
            <div id='' className='container mb-4 pt-5'>
                <h1 className='services-title mt-5 mb-5'>{role === 'admin' ? 'Inventory Items':'Trending Cars'}</h1>
                <div className='services-container '>
                    {
                        products.slice(0, 6).map(product => <Inventory
                            key={product._id}
                            product={product}
                            role={role==='admin'}
                        ></Inventory>)
                    }
                </div>
                <Link to="/inventories" className='py-3 mt-2 d-inline-block justify-content-end see_more_btn d-flex'>see more <FontAwesomeIcon className='mt-1 ms-1' icon={faRightLong} /></Link>
            </div>
            {/* services  */}
            <div id='' className='container mb-5'>
                <h1 className='services-title mt-5 mb-5'>Our Services</h1>
                <div className='services-container '>
                    {
                        services.slice(0, 6).map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <Link to="/services" className='py-3 mt-2 d-inline-block justify-content-end see_more_btn d-flex'>see more <FontAwesomeIcon className='mt-1 ms-1' icon={faRightLong} /></Link>
            </div>
            <Cetagories></Cetagories>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;