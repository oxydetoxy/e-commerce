import { useState, useEffect } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import img from "../assets/mac.png";
const cartItems = [
  {
    id: 1,
    productId: 1,
    name: "Product 1",
    photo: img,
    price: 100,
    quantity: 1,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 100;
const discount = 400;
const total = subtotal + tax + shippingCharges - discount;

const Cart = () => {
  const [coupon, setCoupon] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timeid = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeid);
    };
  }, [coupon]);
  return (
    <div className="cart">
      <main>
        {cartItems.map((i) => (
          <CartItem key={i.id} cartItem={i} />
        ))}
      </main>
      <aside>
        <p>Subtotal : ${subtotal}</p>
        <p>Tax : ${tax}</p>
        <p>Shipping Charges : ${shippingCharges}</p>
        <p>
          Discount: <em>-${discount}</em>
        </p>
        <p>
          <b>Total : ${total}</b>
        </p>
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        {coupon &&
          (isValid ? (
            <span className="green">$ {discount} of using coupon</span>
          ) : (
            <span className="red">
              Invalid coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 ? (
          <button onClick={() => navigate("/shipping")}>
            Proceed to Checkout
          </button>
        ) : (
          <button onClick={() => navigate("/")}>Add Items to Cart</button>
        )}
      </aside>
    </div>
  );
};

export default Cart;
