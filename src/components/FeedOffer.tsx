function FeedOffer() {
  return (
    <div className="container mb-4">
      <div className="row row-cols-2">
        <div className="col col-2 text-center">
          <div
            className="card mx-auto"
            style={{ width: "48px", height: "48px" }}
          >
            <div className="placeholder-glow h-100 rounded-circle">
              <div className="placeholder col-12 h-100"></div>
            </div>
          </div>
          <span className="placeholder-wave d-block mb-4">
            <span className="placeholder col-10" />
          </span>
          <span className="text-start d-block text-muted small">Pujas</span>
          <span className="placeholder-wave">
            <span className="placeholder col-12" />
          </span>
          <span className="placeholder-wave">
            <span className="placeholder col-12" />
          </span>
          <span className="placeholder-wave">
            <span className="placeholder col-12" />
          </span>
          <span className="placeholder-wave">
            <span className="placeholder col-12" />
          </span>
          <span className="placeholder-wave">
            <span className="placeholder col-12" />
          </span>
        </div>
        <div className="col col-10">
          <div className="row row-cols-1">
            <div className="col">
              <span className="placeholder-wave m-0 p-0">
                <span className="placeholder col-10" />
              </span>
            </div>
          </div>
          <div className="row row-cols-2 g-1">
            <div className="col" style={{ minHeight: "340px" }}>
              <div className="placeholder-glow h-100">
                <div className="placeholder col-12 h-100"></div>
              </div>
            </div>
            <div className="col" style={{ minHeight: "260px" }}>
              <div className="row row-cols-1 h-100 g-1">
                <div className="col">
                  <div className="placeholder-glow h-100">
                    <div className="placeholder col-12 h-100"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="placeholder-glow h-100">
                    <div className="placeholder col-12 h-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="placeholder-wave m-0 p-0">
            <span className="placeholder col-12" />
          </p>
          <p className="placeholder-wave m-0 p-0">
            <span className="placeholder col-5" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedOffer;
