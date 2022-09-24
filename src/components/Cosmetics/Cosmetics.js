import React, { useEffect, useState } from "react";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

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
          </div>
        );
      })}
    </div>
  );
};

export default Cosmetics;
