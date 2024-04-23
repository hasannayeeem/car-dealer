import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import Loading from "../../Shared/Loading/Loading";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";
import { Link } from "react-router-dom";
import useRole from "../../../Hooks/useRole";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Topbar from "../../../module/topbar/Topbar";

const Inventories = () => {
  const [products, setProducts] = useProducts([]);
  let [user, loading, error] = useAuthState(auth);
  let [role, roleLoading] = useRole(user);
  const [type, setType] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    if (!type && !searchTerm) {
      // If neither type nor searchTerm is set, show all Products
      setFilteredProducts(null);
    } else {
      // Apply filters
      setFilteredProducts(
        products.filter((product) => {
          console.log(product[type], "test");
          if (type === "price" || "year") {
            return String(product[type])
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase());
          } else {
            return product[type]
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase());
          }
        })
      );
    }
  }, [searchTerm, type, products]);
  if (!products.length) {
    <Loading></Loading>;
  }
  return (
    <div id="" className="container mb-5">
      <Topbar
        setSearchTerm={setSearchTerm}
        setType={setType}
        role={role === "admin"}
      />
      <h1 className="services-title mt-5 mb-4">
        {/* {role === "admin" ? "Inventory Items" : "Our Car Collections"} */}
      </h1>
      <div className="services-container ">
        {filteredProducts
          ? filteredProducts.map((product) => (
              <Inventory
                key={product._id}
                product={product}
                role={role === "admin"}
              ></Inventory>
            ))
          : products.map((product) => (
              <Inventory
                key={product._id}
                product={product}
                role={role === "admin"}
              ></Inventory>
            ))}
        {/* {products.map((product) => (
          <Inventory
            key={product._id}
            product={product}
            role={role === "admin"}
          ></Inventory>
        ))} */}
      </div>
    </div>
  );
};

export default Inventories;
