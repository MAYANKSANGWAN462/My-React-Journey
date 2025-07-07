import { act, createContext } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { useState, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  onAddItemToCart: () => {}, //by passing het dummy functoin there on the comopnents we would get the suggestions
  updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  //here the reducer state will automatically get the latest state
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, // added this spreading and copying the old state first
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state, // added this spreading and copying the old state first
      items: updatedItems,
    };
  }
  return state;
}

export default function CartContextProvider({ children }) {
  // <<<<<<--------
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );

  //   const [shoppingCart, setShoppingCart] = useState({ //as all the things are being managed by the useReducer() so now there is no any need of the useState()
  //     items: [],
  //   });

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });

    // setShoppingCart((prevShoppingCart) => { //removed this function used the reducer instead of it
    // });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId: productId,
        amount: amount,
      },
    });

    //from this the code is pasted in the shoppingCartReducer function
    // setShoppingCart((prevShoppingCart) => {
    // });
  }

  const ctxValue = {
    // items: shoppingCart.items,
    items: shoppingCartState.items,
    onAddItemToCart: handleAddItemToCart, //attaching the function to the property onAddItemToCart
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  //// this will be wrapped around those component whcih teh CartContextProvider function is wrapped around  <<<<<-----
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
