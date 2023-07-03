import "./ItemCount.css";
import { useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);

        }
    }
    return (

        <div className="btn-group">
            <div>
                <div>
                    <button className="btn btn-success align-self-start" onClick={decrement}>-</button>
                    <button className="Number align-self-center btn btn-success">{quantity}</button>
                    <button className="btn btn-success align-self-end" onClick={increment}>+</button>
                </div>
                    <button className="btn btn-success align-self-center" onClick={() => onAdd(quantity)} disabled={!stock}>
                        Agregar al carrito
                    </button>
            </div>

        </div>



    )

}

export default ItemCount;