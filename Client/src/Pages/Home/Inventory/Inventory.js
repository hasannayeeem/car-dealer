import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import useProductDetail from "../../../Hooks/useProductDetail";
import Loading from "../../Shared/Loading/Loading";
import "./Inventory.css";
// import { Zoom } from 'react-reveal';

const Inventory = ({ product, role }) => {
  if (!product.length) {
    <Loading></Loading>;
  }
  const { name, _id, img, description, location, price, type, year, quantity, supplierName } =
    product;

  return (
    <div className="product">
      {/* <Zoom> */}
      <img className="w-100 mb-2 inventory_img" src={img} alt=""></img>
      {/* </Zoom> */}
      <h2>{name} {year}</h2>
      <p>
        <small>{description}</small>
      </p>
      <p>Location: {location}</p>
      <p>Price: ${price}</p>
      {/* <p>Quantity: {quantity}</p>  */}
      {quantity ? (
        <p>Stock: {quantity} </p>
      ) : (
          <p className="text-danger">{"Stock Out"}</p>
      )}
      {
        role ? 
        <>
      <p>Supplier: {supplierName}</p>
        </>
        :
        <>
        <p>Type: {type}</p>
        </>
      }
      <Link to={role ? `/inventory/${_id}` : `/carDetails/${_id}`} className="text-end d-block">
        <button className="w-100 py-1 inventory_btn">
          {role ? "Update" : "Details"}
        </button>
      </Link>
    </div>
  );
};

export default Inventory;
