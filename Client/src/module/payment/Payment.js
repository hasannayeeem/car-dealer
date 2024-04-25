import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  `pk_test_51LhtQvBjqfbx5rRvq96ARDDa5sgwQlGAIEjjlowOX12a1yzTCf12MRam9r25Kwg27I6JEoGCWdxnPeqTcLOItIPo00YfuiGBeu`
);

const Payment = () => {
  const [user] = useAuthState(auth);
  return (
    <div
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
      className="my-5 "
    >
      <div className="d-flex justify-content-center">
        <div className="d-flex  w-75 flex-col p-2 sm:p-10 sm:text-left text-center sm:mt-0 mt-3 md:flex-row md:w-8/12  rounded-lg bg-p shadow-lg">
          <div className="w-100 text-secondary mx-auto sm:mx-0 mb-10 sm:mb-0 sm:w-4/12 text-center">
            <h2 className="text-xl">{user?.displayName}</h2>
            <img
              className="w-50 mx-auto sm:w-full h-32 sm:h-96 md:h-48 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={
                user?.photoURL
                  ? user?.photoURL
                  : "https://i.ibb.co/K035fHn/149071.png"
              }
              alt=""
            />
            <h2 className="mt-1">Booking Price : $ 107 /year</h2>
          </div>

          <Elements stripe={stripePromise}>
            <CheckOutForm userData={user}></CheckOutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;