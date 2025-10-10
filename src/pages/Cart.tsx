const cartItems = [];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 100;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  return (
    <div className="cart">
      <main></main>
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

        <button>Checkout</button>
      </aside>
    </div>
  );
};

export default Cart;
