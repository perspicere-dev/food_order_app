import { useContext } from 'react';
import CartContext from '../../Store/cart-context';

import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemremoveHandler = (id) => {
      cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
      cartCtx.addItem({ ...item, amount: 1 })
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemremoveHandler.bind(null, item.id)} //  one can be sure that the id/item is passed to the functions.
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <div>{totalAmount}</div>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
