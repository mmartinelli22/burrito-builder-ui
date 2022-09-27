import React, { Component } from 'react';
import './App.css';
import { getOrders } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';
import { postNewOrder } from '../../apiCalls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [{
        id: 0,
        name: "",
        ingredients: []
      }]
    }
  }

  componentDidMount() {
    return getOrders()
      .then(data => {
        this.setState({ orders: data.orders })
      })
      .catch(err => console.error('Error fetching:', err));
  }
  addOrder = (newOrder) => {
    return postNewOrder(newOrder)
      .then(data => {
        this.setState({ orders: [...this.state.orders, data] })
        console.log(this.state.orders)
      })
      .catch(err => console.error(err))
  }
  render() {
    console.log('state', this.state.orders)
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addOrder={this.addOrder} />
        </header>

        <Orders orders={this.state.orders} />
      </main>
    );
  }
}


export default App;
