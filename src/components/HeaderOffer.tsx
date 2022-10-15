import { Card, Col, Row } from "reactstrap";

function HeaderOffer() {
  return (
    <Card body className="mt-3 shadow-sm">
      <Row className="me-1 fw-bolder">
        <Col>
          Nombre
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </Col>
        <Col className="text-end">
          Puja inicial
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </Col>
        <Col className="text-end">
          Puja actual
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </Col>
        <Col className="text-center">
          Fecha
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </Col>
        <Col className="text-center">
          Estado
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </Col>
      </Row>
    </Card>
  );
}

export default HeaderOffer;
