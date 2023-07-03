import cart from "./assets/cart.svg"

const CartWidget = () => {
    return (
        <button type="button" class="btn btn-success position-relative">
            <img src={cart} alt="cart-widget" />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span class="visually-hidden">unread messages</span>
            </span>
        </button>
    )
}

export default CartWidget