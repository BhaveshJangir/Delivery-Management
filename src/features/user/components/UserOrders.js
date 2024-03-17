import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedInUser } from "../../auth/authSlice";
import {
  fetchLoggedInUserOrdersAsync,
  selectUserInfo,
  selectUserOrders,
} from "../userSlice";
import { discountedPrice } from "../../../app/constants";

export default function UserOrders() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const orders = useSelector(selectUserOrders);
  console.log(orders);
  useEffect(() => {
    dispatch(fetchLoggedInUserOrdersAsync(user.id));
    console.log(user.id);
  }, []);

  const [trackingNumber, setTrackingNumber] = useState("");

  const handleChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(trackingNumber);
    // Optionally, you can clear the input after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="trackingNumber">Enter Tracking Number:</label><br></br>
        <input
          type="text"
          id="trackingNumber"
          value={trackingNumber}
          onChange={handleChange}
          placeholder="Enter tracking number"
        />
        
      </form>
      {orders.map((order) =>
      
        Number(order.parcelno) == +trackingNumber ? (
          console.log(order.name),
          console.log(order.email)
          
        ) : null
      )}
    </div>
  );
}
