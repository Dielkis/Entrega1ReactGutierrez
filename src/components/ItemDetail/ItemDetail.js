import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, img, category, description, price, stock}) => {
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
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad Agregada", quantity)}/>
                </footer>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail;