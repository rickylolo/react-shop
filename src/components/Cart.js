import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import CartDetail from './CartDetail';

const styles = {
  cart: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  },
};

class Cart extends Component {
  render() {
    const { cart, isCartVisible, showCart } = this.props;
    const qty = cart.reduce((acc, el) => acc + el.qty, 0);
    return (
      <div>
        <span style={styles.bubble}>{qty !== 0 ? <BubbleAlert value={qty} /> : null}</span>
        <button onClick={showCart} style={styles.cart}>
          Cart
        </button>
        {isCartVisible ? <CartDetail cart={cart}></CartDetail> : null}
      </div>
    );
  }
}

export default Cart;
