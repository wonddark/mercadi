import { ReactComponent as WebShopping } from "../../assets/undraw_web_shopping_re_owap.svg";
import { Link } from "react-router-dom";

function SidebarNoOffers() {
  return (
    <div className="card card-body mt-2">
      <WebShopping style={{ width: "60%", height: "auto", margin: "0 auto" }} />
      <p className="lead">
        No tienes ofertas abiertas en este momento. Para ver tus ofertas
        cerradas ve <Link to="/perfil/ofertas">aquí</Link>
      </p>
    </div>
  );
}

export default SidebarNoOffers;
