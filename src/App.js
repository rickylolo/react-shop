import { Component } from 'react';
import Products from './components/Products';

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
        <Products addToCart={() => console.log('Do Nothing')} products={this.state.products}></Products>
      </div>
    );
  }
}

export default App;
