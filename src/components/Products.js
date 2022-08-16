import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  console.log(cart);
  return (
    <div className="product-container">
      {products.map((ele) => (
        <div key={ele.id} className="products">
          <img src={ele.thumbnail} alt={ele.title} className="prod-img" />
          <div className="product-details">
            <span>{ele.title}</span>
            <span>$ {ele.price}</span>
          </div>
          <div className="buttons">
            {cart.some((p) => p.id === ele.id) ? (
              <button
                className="cta-2"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: ele,
                  })
                }
              >
                -
              </button>
            ) : (
              <button
                className="cta-1"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: ele.id,
                      title: ele.title,
                      thumbnail: ele.thumbnail,
                      qty: 1,
                      price: ele.price,
                    },
                  })
                }
              >
                +
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
