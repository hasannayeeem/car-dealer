import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import ProductDetails from "./Pages/Home/ProductDetails/ProductDetails";
import Products from "./Pages/Home/Products/Products";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import ManageItem from "./Pages/ManageItem/ManageItem";
import AddProduct from "./Pages/AddProduct/AddProduct";
import About from "./Pages/About/About";
import Contact from "./Pages/Home/Contact/Contact";
import Inventories from "./Pages/Home/Inventories/Inventories";
import Blog from "./Pages/Blog/Blog";
import Services from "./Pages/Services/Services";
import ServiceDetail from "./Pages/Services/ServiceDetail";
import RequireAdmin from "./module/auth/RequireAdmin";
import RequireAuth from "./module/auth/RequireAuth";
import Payment from "./module/payment/Payment";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/inventories"
          element={
            <RequireAdmin>
              <Inventories></Inventories>
            </RequireAdmin>
          }
        ></Route>
        <Route path="/cars" element={<Inventories></Inventories>}></Route>
        <Route
          path="/carDetails/:productId"
          element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory/:productId"
          element={
            // <RequireAuth>
            <Products></Products> //productDetails
            /* </RequireAuth> */
          }
        ></Route>
        <Route
          path="/manageitems"
          element={
            // <RequireAuth>
            <ManageItem></ManageItem>
            /* </RequireAuth> */
          }
        ></Route>
        <Route
          path="/additem"
          element={
            // <RequireAuth>
            <AddProduct></AddProduct>
            // </RequireAuth>
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <RequireAuth>
            <Payment></Payment>
          </RequireAuth>
          }
        ></Route>
        {/* <Route path='/blog' element={<Blog></Blog>}></Route> */}
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
