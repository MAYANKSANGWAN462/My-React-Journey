import { useRef,useContext } from 'react';
import { CartContext } from '../store/shopping-cart-context';
import CartModal from './CartModal.jsx';

export default function Header({ cart, onUpdateCartItemQuantity }) {
  const cartCtx = useContext(CartContext);
  const modal = useRef();

  const cartQuantity = cartCtx.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        // cartItems={cart.items}
        // onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
