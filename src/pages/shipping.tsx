import { useState } from "react";
import type { ChangeEvent } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: 0,
    phone: "",
    email: "",
    paymentMethod: "",
  });
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setShippingInfo((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "pinCode" ? Number(e.target.value) : e.target.value,
    }));
  };
  return (
    <div className="shipping">
      <button className="back-btn" onClick={() => navigate("/cart")}>
        <BiArrowBack />
      </button>
      <form>
        <h1>Shipping Address</h1>
        <input
          required
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          name="state"
          placeholder="State"
          value={shippingInfo.state}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          name="country"
          placeholder="Country"
          value={shippingInfo.country}
          onChange={changeHandler}
        />
        <input
          required
          type="number"
          name="pinCode"
          placeholder="Pin Code"
          value={shippingInfo.pinCode}
          onChange={changeHandler}
        />
        <input
          required
          type="number"
          name="phone"
          placeholder="Phone"
          value={shippingInfo.phone}
          onChange={changeHandler}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          value={shippingInfo.email}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          name="paymentMethod"
          placeholder="Payment Method"
          value={shippingInfo.paymentMethod}
          onChange={changeHandler}
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
