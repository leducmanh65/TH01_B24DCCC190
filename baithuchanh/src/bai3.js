import React, {useState} from "react";
function Product({product, addToCart}) {
  return (
    <div>
      {product.name} - {product.price}₫
      <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
    </div>
  );
}

function CartApp() {
  const products = [
    {id: 1, name: "Sách", price: 10000},
    {id: 2, name: "Bút", price: 5000},
    {id: 3, name: "Vở", price: 7000},
  ];
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Bài 3: Giỏ hàng</h2>
      <h3>Sản phẩm</h3>
      {products.map((p) => (
        <Product key={p.id} product={p} addToCart={addToCart} />
      ))}
      <h3>Giỏ hàng</h3>
      <ul>
        {cart.map((c, i) => (
          <li key={i}>
            {c.name} - {c.price}₫
          </li>
        ))}
      </ul>
      <p>Tổng tiền: {total}₫</p>
    </div>
  );
}

export default CartApp;
