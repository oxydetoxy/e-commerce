import { Link } from "react-router-dom";
import ProductCart from "../components/Product-Cart";
import img from "../assets/mac.png";

const Home = () => {
  const addToCartHandler = () => {
    console.log("add to cart");
  };
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
      <ProductCart
          photo={img}
          name="mackbook"
          price={4545}
          productId="jdsf"
          stock={200}
          handler={addToCartHandler}
          
        />
      </main>
    </div>
  );
};

export default Home;
