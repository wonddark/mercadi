import { Button, Card, Col, Container, Row } from "reactstrap";

interface Props {
  name: string;
  initialOffer: string;
  currentOffer: string;
  myOffer: string;
}
function AuctionOfferQuick({
  name,
  initialOffer,
  currentOffer,
  myOffer,
}: Props) {
  return (
    <Card body className="my-2">
      <Container>
        <Row xs={1}>
          <Col>
            <span className="h6">{name}</span>
          </Col>
          <Col>
            <span className="small text-muted">
              Oferta inicial: <span className="fw-bold">{initialOffer}</span>
            </span>
          </Col>
          <Col>
            <span className="small text-muted">
              Oferta actual: <span className="fw-bold">{currentOffer}</span>
            </span>
          </Col>
          <Col>
            <span className="small text-muted">
              Tu oferta: <span className="fw-bold">{myOffer}</span>
            </span>
          </Col>
          <Col className="mt-2">
            <Row className="justify-content-center">
              <Col xs={8}>
                <Button className="w-100" color="danger" size="sm">
                  Retirar oferta
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default AuctionOfferQuick;
