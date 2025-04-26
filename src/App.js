import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout';

class App extends Component {
  state = {
    products: [
      { name: 'Tomate', price: 1500, img: 'products/tomato.jpg' },
      { name: 'Peas', price: 2500, img: 'products/peas.jpg' },
      { name: 'Lettuce', price: 500, img: 'products/lettuce.jpg' },
    ],
  };

  render() {
    return (
      <div>
        <Layout>
          <Products addToCart={() => console.log('Do Nothing')} products={this.state.products}></Products>
        </Layout>
      </div>
    );
  }
}

export default App;
