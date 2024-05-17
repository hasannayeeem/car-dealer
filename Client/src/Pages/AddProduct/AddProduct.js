import React from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:8000/api/v1/create-inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('added successfully')
                }
            })
        reset();
    };
    // code of update quantity but not worked
    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     console.log(data);
    //     const url = `http://localhost:8000/products/${productId}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         })
    //     register.target.reset()
    // };
    // <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
    //     <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
    //     <input className='main-btn' type="submit" value="Add Quantity" />
    // </form>
    return (
        <div className='w-50 mx-auto py-5'>
            <h2 className='about-h'>Please Add Your Product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplierName")} />
                <input className='main-btn' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;