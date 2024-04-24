import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../Shared/PageTitle/PageTitle";
import Loading from "../Shared/Loading/Loading";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
const ManageItem = () => {
  const [products, setProducts] = useProducts();
  if (!products.length) {
    <Loading></Loading>;
  }
  const handleDelete = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      background: "#343a40",
      color: "yellow",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete from Products!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/v1/delete-inventory/${id}`)
          .then((data) => {
            Swal.fire(
              "Deleted!",
              `${name} has been Deleted from Inventories.`,
              "success"
            );

            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
            // refetch()
          })
          .catch((error) => {
            console.log(error.response.data);
            if (error.response.status === 403) {
              alert("You are Not Admin");
            }
          });
      }
    });
  };
  return (
    <div className="w-75 mx-auto py-5">
      <PageTitle title="Manage Items"></PageTitle>
      <div className="d-flex mb-3 justify-content-between ">
        <h2>Manage your items </h2>
        <Link to="/additem">
          <button className="ms-5 fs-4">Add New iTem</button>
        </Link>
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Supplier</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ name, _id, quantity, supplierName }, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td>{name}</td>
              <td className="d-flex justify-content-between ">
                <span>{quantity} </span>
                <Link to={`/inventory/${_id}`}>
                  <AiOutlineEdit className="text-primary" />
                </Link>
              </td>
              <td>{supplierName}</td>
              <td>
                <button
                  className="border-0"
                  onClick={() => handleDelete(_id, name)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageItem;
