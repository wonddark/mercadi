import { formatMoney } from "../helpers/formatters.helper";

function FeedOffer() {
  return (
    <div className="container mb-4">
      <div className="row row-cols-1">
        <div className="col">
          <p className="placeholder-glow m-0 p-0">
            <span className="placeholder col-5" />
          </p>
          <span>Arthur Conan</span>
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
      <p className="placeholder-glow m-0 p-0">
        <span className="placeholder col-12" />
      </p>
      <span>Descripción de esta oferta</span>
      <p className="placeholder-glow m-0 p-0">
        <span className="placeholder col-5" />
      </p>
      <span>Puja inicail: {formatMoney("10000")}</span>
    </div>
  );
}

export default FeedOffer;
