import React from 'react';
import './Orders.css';

const Orders = (props) => {
  console.log('props', props)
  const orderEls = props.orders.map((order, index) => {
    return (
      <div className="order" key={`${order.id}-${index}`}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list" key={`${order.name}-${index}`}>
          {order.ingredients.map((ingredient, index) => {
            return <li key={`${ingredient}-${index}`}>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });

  return (
    <section>
      {orderEls.length ? orderEls : <p>No orders yet!</p>}
    </section>
  )
}

export default Orders;