
function ProductCard({product}) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price}€</p>
      <p>{product.isPurchased === true ? "✅" : "🟡"}</p>
      <button>Buy</button>
    </div>
  )
}

export default ProductCard