import ProductCard from "./ProductCard";

function ProductList({ allProducts, searchValue }) {
  return (
    <div className="product-list container">
      <h2>Product List</h2>
      {allProducts.filter((product) => product.name.startsWith(searchValue)).map((eachProduct, index) => {
        return (
          <ProductCard product={eachProduct} key={index} />
        )
      })}
    </div>
  )
}

export default ProductList