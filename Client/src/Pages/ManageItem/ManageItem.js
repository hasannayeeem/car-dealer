import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan  } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Loading from '../Shared/Loading/Loading';
const ManageItem = () => {
    const [products, setProducts] = useProducts();
    if(!products.length){
        <Loading></Loading>
    }
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?');
        if(proceed){
            const url = `https://morning-harbor-53882.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id  !== id);
                setProducts(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto py-5'>
            <PageTitle title="Manage Items"></PageTitle>
            <h2>Manage your items  <Link to="/additem" ><button className='ms-5 fs-4'>Add New iTem</button></Link> </h2> 
            {
                products.map(product => <div key={product.id}>
                    <h5>{product.name} <button className='border-0' onClick={() => handleDelete(product._id)}><FontAwesomeIcon icon={faTrashCan} /></button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageItem;