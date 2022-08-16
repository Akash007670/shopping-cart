import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const [total, setTotal] = useState(0);

  const { cart } = state;

  const changeQtyHandler = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curVal) => {
        return acc + Number(curVal.price) * curVal.qty;
      }, 0)
    );
  }, [cart]);
  return (
    <div className="cart-container">
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <div
        style={{ display: "flex", justifyContent: "space-between", padding: 5 }}
      >
        <span>Total Items : {cart.length}</span>
        <span style={{ alignSelf: "center" }}>Subtotal : $ {total}</span>
      </div>
      {cart.length > 0 ? (
        cart.map((ele) => (
          <div className="cart-items" key={ele.id}>
            <div
              style={{
                display: "flex",
              }}
            >
              <img
                src={ele.thumbnail}
                alt={ele.title}
                style={{ height: 50, width: 50, objectFit: "cover" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 5,
                }}
              >
                <b>{ele.title}</b>
                <span>$ {ele.price}</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <button
                className="btn-2"
                onClick={() => changeQtyHandler(ele.id, ele.qty - 1)}
              >
                -
              </button>
              <span>{ele.qty}</span>
              <button
                className="btn-1"
                onClick={() => changeQtyHandler(ele.id, ele.qty + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <span style={{ display: "flex", alignSelf: "center", padding: 20 }}>
          Cart is Empty
        </span>
      )}
    </div>
  );
};

export default Cart;
