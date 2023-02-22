import React from 'react';
import "../styles/cart.css";
const Cart = () => {
  return (
    <div className='cart-container'>
      <div className='title-cart'>
      <h2>Detalles de la compra</h2>
      </div>
      <div className='item-deatails'>
        <div className='cart-img-course'>
          <img src="" alt="img-course" />
        </div>
        <div>
          <div>details 1</div>
          <div>details 2</div>
        </div>
        <div className='price-item-cart'>
          <div>$166</div>
          <del>$266</del>
        </div>
      </div>
      <div className='resumen-item'>
        <div className='title-resume-cart'>
        <h3>Resumen</h3>
        </div>
        <div className='price-resumen'>
          <div>Lorem, ipsum dolor.</div>
          <div>$632</div>
        </div>
        <div className='price-resumen'>
          <div>Lorem, ipsum dolor.</div>
          <div>-$180</div>
        </div>
        <div className='total-cart'>
          <h3>TOTAL</h3>
          <p>$452</p>
        </div>
      </div>
      <div className='buttom-buy-container'>
        <div className='stripe-top'></div>
        <button className='button-buy'>Completar pago</button>
        <div className='stripe-bottom'></div>
      </div>
    </div>
  );
};

export default Cart;