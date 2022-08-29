import React from "react";
import arrow from "../sib2 frametmt/arrow.png";
import cart from "../sib2 frametmt/cart.png";
import Item from "./Item";
import { Scrollbars } from 'react-custom-scrollbars-2';
const Cart = () => {
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src={arrow} alt="arrow" className="arrow-icon" />
          <h3>Continue buying</h3>
        </div>
        <div className="cart-icon">
          <img src={cart} alt="cart" />
          <p>7</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          {" "}
          You have <span className="total-items-count"> 7</span> items in
          shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
          <Scrollbars >
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
            <h3>cart Total : <span>200rs</span></h3>
            <button>Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
