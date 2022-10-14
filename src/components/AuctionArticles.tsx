import { Container } from "reactstrap";
import AuctionArticleQuick from "./AuctionArticleQuick";
import { dummyArticles } from "../data/dummy-articles";

function AuctionArticles() {
  return (
    <Container className="px-0">
      <p className="small text- fw-bold text-muted">Tus artículos</p>
      <Container
        className="px-0 pe-1"
        style={{
          height: "calc(32vh)",
          overflow: "auto",
        }}
      >
        {dummyArticles.slice(0, 3).map((item, index) => (
          <AuctionArticleQuick
            name={item.name}
            initialOffer={item.initialOffer}
            currentOffer={item.currentOffer}
            key={index}
          />
        ))}
      </Container>
    </Container>
  );
}

export default AuctionArticles;
