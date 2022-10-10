import { useState, useEffect, useMemo, useRef } from "react";

function CartUseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  // Handle click button add
  const handleAdd = () => {
    setProducts((prevProd) => [...prevProd, { name, price: +price }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  // Handle total price using useMemo()
  const total = useMemo(() => {
    return products.reduce((result, prod) => {
      console.log("Tính toán lại..!");
      return result + prod.price;
    }, 0);
  }, [products]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  // Event click enter
  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <label>Name: </label>
      <input
        placeholder="Enter name"
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Price: </label>
      <input
        type="number"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <br />
      <br />
      <button onClick={handleAdd}>Add</button>
      <h1>Total: {total}</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartUseMemo;
