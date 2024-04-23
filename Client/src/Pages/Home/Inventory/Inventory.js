import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import useProductDetail from "../../../Hooks/useProductDetail";
import Loading from "../../Shared/Loading/Loading";
import "./Inventory.css";

const Inventory = ({ product, role }) => {
  if (!product.length) {
    <Loading></Loading>;
  }
  const { name, _id, img, description, price, quantity, supplierName } =
    product;

  return (
    <div className="product">
      <img className="w-100 mb-2 inventory_img" src={img} alt=""></img>
      <h2>{name}</h2>
      <p>
        <small>{description}</small>
      </p>
      <p>Price: ${price}</p>
      {/* <p>Quantity: {quantity}</p>  */}
      {quantity == 8 ? (
          <p className="text-danger">{quantity == 8 && "Stock Out"}</p>
        ) : (
        <p>Stock: {quantity} </p>
      )}
      <p>Supplier: {supplierName}</p>
      <Link to={role ? `/inventory/${_id}` : `/carDetails/${_id}`} className="text-end d-block">
        <button className="w-100 py-1 inventory_btn">
          {role ? "Update" : "Details"}
        </button>
      </Link>
    </div>
  );
};

export default Inventory;
