import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, img, category, description, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }

    return (
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xl-2 text-center pt-2">
            <div className="card">
                <img src={img} alt={name} className="card-img-top img-fluid p-2" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-tex">Categoria: {category}</p>
                    <p className="card-tex">Descripción: {description}</p>
                    <p className="card-tex">Precio: {price}</p>
                    <p className="card-tex">Stock: {stock}</p>
                    <footer>
                        {
                            quantityAdded > 0 ? (
                                <Link to='/cart' className="Option">Terminar compra</Link>
                            ) : (
                                <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
                            )
                        }

                    </footer>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;