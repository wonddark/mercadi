function HeaderBid() {
  return (
    <div className="card card-body mt-3 shadow-sm">
      <div className="row me-1 fw-bolder">
        <div className="col">
          Artículo
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col text-end d-none d-md-block">
          Oferta
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col text-center d-none d-md-block">
          Fecha
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col text-center d-none d-lg-block">
          Estado
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col col-1 text-center" />
      </div>
    </div>
  );
}

export default HeaderBid;
