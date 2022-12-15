import { Link } from "react-router-dom";
import { ReactComponent as ProductPhotography } from "../../assets/undraw_product_photography_91i2.svg";

function SidebarNoArticles() {
  return (
    <div className="card card-body mt-2">
      <ProductPhotography
        style={{ width: "60%", height: "auto", margin: "0 auto" }}
      />
      <Link to="/perfil/ofertas/crear" className="btn btn-primary mt-3">
        <i className="bi bi-bag-plus-fill me-2" />
        Publicar artículo
      </Link>
    </div>
  );
}

export default SidebarNoArticles;
