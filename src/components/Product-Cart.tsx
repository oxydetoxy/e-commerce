import { FaPlus } from "react-icons/fa";

const server = `hbsfjbksf`;
type ProductPorps = {
  photo: string;
  name: string;
  price: number;
  productId: string;
  stock: number;
  handler: () => void;
};
const ProductCart = ({
  photo,
  name,
  price,
  productId,
  stock,
  handler,
}: ProductPorps) => {
  return (
    <div className="productcard">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>${price}</span>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
