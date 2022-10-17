import { Button, Card, Col, Container, Row } from "reactstrap";
import useToggleOpen from "../hooks/toggle-open.hooks";
import RetireBid from "./RetireBid";
import { formatMoney } from "../helpers/formatters.helper";

interface Props {
  id: string;
  name: string;
  initialOffer: string;
  currentOffer: string;
  myOffer: string;
}
function BidsQuickView({ name, initialOffer, currentOffer, myOffer }: Props) {
  const { isOpen, toggleIsOpen } = useToggleOpen();
  return (
    <Card body className="my-2">
      <Container>
        <Row xs={1}>
          <Col>
            <span className="h6">{name}</span>
          </Col>
          <Row className="justify-content-between">
            <Col xs={10}>
              <span className="small text-muted d-block">
                Puja inicial: <strong>{formatMoney(initialOffer)}</strong>
              </span>
              <span className="small text-muted d-block">
                Puja actual: <strong>{formatMoney(currentOffer)}</strong>
              </span>
              <span className="small text-muted d-block">
                Tu puja: <strong>{formatMoney(myOffer)}</strong>
              </span>
            </Col>
            <Col xs={1}>
              <Button
                color="danger"
                size="sm"
                onClick={toggleIsOpen}
                title="Retirar la puja"
              >
                <i className="bi bi-door-open-fill" />
              </Button>
            </Col>
          </Row>
        </Row>
      </Container>
      {isOpen && <RetireBid isOpen={isOpen} toggle={toggleIsOpen} />}
    </Card>
  );
}

export default BidsQuickView;
