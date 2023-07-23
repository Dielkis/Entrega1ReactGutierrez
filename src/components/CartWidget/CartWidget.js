
import { HiShoppingCart } from "react-icons/hi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantify } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{display: totalQuantify > 0 ? 'block':'none'}}>
            <button type="button" className="btn btn-success position-relative rounded-circle">
                <HiShoppingCart />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalQuantify}
                </span>
            </button>
        </Link>
    )
}

export default CartWidget