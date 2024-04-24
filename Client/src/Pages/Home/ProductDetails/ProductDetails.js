import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import useProductDetail from "../../../Hooks/useProductDetail";
import "./ProductDetails.css";
import useProducts from "../../../Hooks/useProducts";
import Loading from "../../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useRole from "../../../Hooks/useRole";
import { Fade } from "react-reveal";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product] = useProductDetail(productId);
  let [user, loading, error] = useAuthState(auth);
  let [role, roleLoading] = useRole(user);
  let {
    name,
    img,
    description,
    supplierName,
    year,
    location,
    type,
    quantity,
    price,
  } = product;
  const toUpdate = (id, data) => {
    // data.quantity =(data.quantity == -1) ? 0 : data.quantity;
    if (data.quantity < 0 || (!data.quantity && data.quantity != 0)) {
      Swal.fire(
        `Validation Failed! ${(typeof data.quantity, data.quantity)}`,
        "Must be a number"
      );
      return;
    }
    const url = `http://localhost:8000/api/v1/update-inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          Swal.fire("Updated!", `${result.message}`, "success");
        } else {
          Swal.fire("oops!", `${result.message}`, "success");
        }
      });
  };

  const handleQuantity = (e) => {
    e.preventDefault();
    const newQuantity = e.target.quantity.value;
    quantity = parseInt(quantity) + parseInt(newQuantity);
    toUpdate(productId, { quantity });
    e.target.reset();
  };
  const handleDelivered = (e) => {
    e.preventDefault();
    quantity--;
    toUpdate(productId, { quantity });
  };
  return (
    <div className="w-50 mx-auto my-5">
      <Fade right>
        <img className="w-100 mb-2" src={img} alt=""></img>
      </Fade>
      <Fade left>
        <h2>
          {name} {year}
        </h2>
        <p>
          <small>{description}</small>
        </p>
        <p>Location: {location}</p>
        <p>Price: {price}</p>
        {quantity ? (
          <p>Stock: {quantity} </p>
        ) : (
          <p className="text-danger">{"Stock Out"}</p>
        )}
        <p>Type: {type}</p>
        <p>Supplier: {supplierName}</p>
        {role === "admin" ? (
          <>
            <Link to={`/manageitems`}>
              <button className="btn btn-main me-4">Manage Inventories</button>
            </Link>

            <form onSubmit={handleQuantity} className="d-inline-block">
              <input
                className="pb-1 input-text"
                placeholder="Quantity"
                name="quantity"
                type="number"
              />
              <input
                className="btn btn-main"
                type="submit"
                value="Add Quantity"
              />
            </form>

            <Link to="">
              <button
                onClick={handleDelivered}
                className="btn btn-main ms-4 outline-none"
              >
                Delivered
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to={`/contact`} className="d-block">
              <button className="main-btn d-block">Contact</button>
            </Link>
          </>
        )}
      </Fade>
    </div>
  );
};

export default ProductDetails;
