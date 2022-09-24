import React, { useEffect, useState } from "react";
import { addtoDb, removeFromDb } from "../utilities/localStorage";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  const addToCart = (id, e) => {
    addtoDb(id);
  };

  const removeFromCart = (id) => {
    removeFromDb(id);
  };

  return (
    <div>
      {cosmetics.map((cosmetic) => {
        return (
          <div>
            <h3>Name: {cosmetic.name}</h3>
            <p>
              <strong>Price: {cosmetic.price}</strong>
            </p>
            <p>
              <small>Id: {cosmetic.id}</small>
            </p>
            <button onClick={(e) => addToCart(cosmetic.id, e)}>
              Add to Cart
            </button>
            <button onClick={() => removeFromCart(cosmetic.id)}>
              Remove from Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cosmetics;
