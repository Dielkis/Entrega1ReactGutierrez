import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h3>Motos&Bikes</h3>
            <div>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar