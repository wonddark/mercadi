import ProductPhotography from "../../assets/ProductPhotography";
import { Link } from "react-router-dom";

function SidebarNoArticles() {
  return (
    <div className="card card-body mt-2">
      <ProductPhotography
        style={{ width: "40%", height: "auto", margin: "10px auto 0" }}
      />
      <p className="small text-center mt-3 mx-1">
        No tienes ventas activas en este momento.{" "}
        <Link to="/perfil/ofertas" className="text-decoration-none">
          ¿Quieres ver todas tus ventas?
        </Link>
      </p>
    </div>
  );
}

export default SidebarNoArticles;
