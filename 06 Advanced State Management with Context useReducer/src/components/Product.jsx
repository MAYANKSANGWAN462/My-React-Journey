import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Product({
  id,
  image,
  title,
  price,
  description,
  //onAddToCart, //so now there is no any need of it 
}) {
  const {onAddItemToCart} = useContext(CartContext);
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          {/* <button onClick={() => onAddToCart(id)}>Add to Cart</button> */}
          <button onClick={() => onAddItemToCart(id)}>Add to Cart</button> {/* ere we are passing the function directly */}
        </p>
      </div>
    </article>
  );
}
