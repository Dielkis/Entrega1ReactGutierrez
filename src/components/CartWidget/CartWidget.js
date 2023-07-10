
import { HiShoppingCart } from "react-icons/hi";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-success position-relative rounded-circle">
            <HiShoppingCart/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                9+
            </span>
        </button>
    )
}

export default CartWidget