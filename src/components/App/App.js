import React, { Component } from 'react';
import './App.css';
import { getOrders } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

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
    getOrders().then((data) => {
      this.setState({ orders: [...data[0].orders] })
    }, [])
      .catch(err => console.error('Error fetching:', err));
  }
  addOrder = (order) => {
    this.setState({ orders: [...this.state.orders, order] });
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
