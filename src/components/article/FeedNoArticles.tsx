import { Link } from "react-router-dom";
import { ReactComponent as ProductPhotography } from "../../assets/undraw_empty_re_opql.svg";

function FeedNoArticles() {
  return (
    <div className="card card-body border-0">
      <ProductPhotography
        style={{ width: "60%", height: "auto", margin: "0 auto" }}
      />
      <p className="lead mt-3 text-center">
        Al parecer aún no tenemos ningún artículo para mostrarte
      </p>
      <Link
        to="/perfil/ofertas/crear"
        className="btn btn-primary mt-3 w-auto mx-auto"
      >
        <i className="bi bi-bag-plus-fill me-2" />
        Publica el primer artículo
      </Link>
    </div>
  );
}

export default FeedNoArticles;
