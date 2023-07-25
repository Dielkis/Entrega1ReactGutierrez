import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantify, getCartTotal } = useContext(CartContext);

  if (totalQuantify === 0) {
    return (
      <div>
        <h1>No hay productos en el carrito</h1>
        <Link to="/" className="Option">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${getCartTotal()}</h3>
      <button onClick={() => clearCart()}>Limpiar Carrito</button>
      <Link to='/checkout' className='Option'>
        Procesar compra
      </Link>
    </div>
  );
};

export default Cart;
