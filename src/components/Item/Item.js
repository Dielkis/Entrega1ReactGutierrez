import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, img, description }) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xl-2 text-center pt-2">
      <div className="card">
        <img src={img} alt={name} className="card-img-top img-fluid p-2" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <p className="card-text overflow-auto">{description}</p>
          <div className="mt-auto">
            <Link to={`/item/${id}`} className="btn btn-success">Ver detalle</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
