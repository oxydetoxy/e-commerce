import { useState } from "react";
import ProductCart from "../components/Product-Cart";
import img from "../assets/mac.png";

const Search = () => {
  const [seach, setSeach] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(10000000);
  const [category, setCategory] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const addToCartHandler = () => {
    console.log("add to cart");
  };
  const isNextPage = true;
  const isPrevPage = true;


  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <label>Sort</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
        <div>
          <label>Max Price</label>
          <input
            type="range"
            min={100}
            max={10000000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">None</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>
      </aside>
      <main>
        <h2>Products</h2>
        <input
          type="text"
          placeholder="Search"
          value={seach}
          onChange={(e) => setSeach(e.target.value)}
        />
        <div className="search-product-list">
          <ProductCart
            photo={img}
            name="mackbook"
            price={4545}
            productId="jdsf"
            stock={200}
            handler={addToCartHandler}
          />
        </div>
        <article>
          <button disabled={!isPrevPage} onClick={() => setPage(page - 1)}>Previous</button>
          <span>{page} of {4}</span>
          <button disabled={!isNextPage} onClick={() => setPage(page + 1)}>Next</button>
        </article>
      </main>
    </div>
  );
};

export default Search;
