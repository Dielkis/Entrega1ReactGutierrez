
import { HiShoppingCart } from "react-icons/hi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <div>
            <Link to='/cart' className="btn btn-success position-relative rounded-circle" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
                <HiShoppingCart />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalQuantity}
                </span>
            </Link>
        </div>
    )
}

export default CartWidget;