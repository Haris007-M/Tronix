import React, { useState } from 'react';

function QuantityCounter({carts, setCarts , cart}) {
  // const handleInc = (id) => {
  //   const updateCart = carts.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         quantity: item.quantity + 1,
  //       };
  //     }
  //     return item;
  //   });
  //   setCarts(updateCart);
  //   localStorage.setItem("cart", JSON.stringify(updateCart));
  // };

  // const handleDec = (id) => {
  //   const updatedCart = carts.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         quantity: item.quantity - 1,
  //       };
  //     }
  //     return item;
  //   });

  //   setCarts(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  return (
    <div className='p-0 mt-4 QuantityCounter-Div-Set'>
      <button  className='minusButton'>-</button>
      <span className='btn-mid-qty'>2</span>
      <button  className='plusButton'>+</button>
    </div>
  );
}

export default QuantityCounter;
