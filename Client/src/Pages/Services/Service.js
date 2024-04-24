import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
// import useProductDetail from '../../../Hooks/useProductDetail';
import Loading from "../Shared/Loading/Loading";
import { MdOutlineWatchLater } from "react-icons/md";
import "./service.css";
import { CiBookmark } from "react-icons/ci";
import { Rotate } from 'react-reveal';


const Service = ({ service }) => {
  if (!service?.length) {
    <Loading></Loading>;
  }
  const { serviceType, description, warranty, duration, price } = service || {};

  return (
    <Rotate top left>
    <div className="service">
      {/* <img className='w-100 mb-2' src={img} alt=""></img> */}
      <div className="card-header">
      <h3 className="fw-bold">{serviceType || 'Besic Service'}</h3>

        <p>{description?.slice(0, 39)}...</p>

      </div>
      {/* <p><small>{description}</small></p> */}
      <p className="mt-2 mb-3">
        ₹ <span className="fw-bolder fs-1">{price}</span> Onwards
      </p>
      <div className="d-flex justify-content-center align-items-center  mb-0">
        <MdOutlineWatchLater />
        <p className="mb-0 m-lg-1 "> {duration||'Time Taken 6 Hours'}</p>
      </div>
        <hr className="mx-5 my-2 "/>
      <div className="d-flex justify-content-center align-items-center  mb-0">
      <CiBookmark />
        <p className=" m-2 ">{warranty || '2 Months / 2,000 Kms Warranty'}</p>
      </div>

      <Link to={`/contact`} className="text-end d-block">
        <button className="w-100 py-1 serBtn">Contact</button>
      </Link>
    </div>
    </Rotate>
  );
};

export default Service;
