const CartItem = ({  name, price, quantity }) => {
    return (
        <div className="cart-item">
            <p>{name}</p>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
        </div>
    );
};

export default CartItem;