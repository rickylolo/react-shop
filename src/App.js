import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    products: [
      { name: 'Tomate', price: 1500, img: 'products/tomato.jpg' },
      { name: 'Peas', price: 2500, img: 'products/peas.jpg' },
      { name: 'Lettuce', price: 500, img: 'products/lettuce.jpg' },
    ],
    cart: [
      // { name: 'Tomate', price: 1500, img: 'products/tomato.jpg', qty:1 },
    ],
  };

  addToCart = (product) => {
    const { cart } = this.state;
    if (cart.find((x) => x.name === product.name)) {
      const newCart = cart.map((x) => (x.name === product.name ? { ...x, qty: x.qty + 1 } : x));
      return this.setState({ cart: newCart });
    }

    return this.setState({
      cart: this.state.cart.concat({ ...product, qty: 1 }),
    });
  };

  render() {
    return (
      <div>
        <NavBar cart={this.state.cart}></NavBar>
        <Layout>
          <Title></Title>
          <Products addToCart={this.addToCart} products={this.state.products}></Products>
        </Layout>
      </div>
    );
  }
}

export default App;
