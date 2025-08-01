import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  return (
    <CartContextProvider>
      {/* <CartContext.Provider value={{items: []}}> */}
      {/* <CartContext.Provider value={ctxValue}> */}
      <Header />
      <Shop  />
      {/* // </CartContext.Provider> */}
    </CartContextProvider>
  );
}

export default App;
