import { Card, Col, Row } from "reactstrap";

function HeaderBid() {
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
        <Col className="text-end d-none d-md-block">
          Mi puja
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
        <Col className="text-center d-none d-md-block">
          Fecha
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </Col>
        <Col className="text-center d-none d-lg-block">
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

export default HeaderBid;
