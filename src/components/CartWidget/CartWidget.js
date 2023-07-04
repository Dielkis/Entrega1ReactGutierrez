import cart from "./assets/cart.svg"

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-success position-relative">
            <img src={cart} alt="cart-widget" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">Donde estas?</span>
            </span>
        </button>
    )
}

export default CartWidget