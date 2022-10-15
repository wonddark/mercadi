import { Button, Card, Col, Container, Row } from "reactstrap";
import useToggleOpen from "../hooks/toggle-open.hooks";
import RetireBid from "./RetireBid";
import { formatMoney } from "../helpers/formatters.helper";

interface Props {
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
          <Col>
            <span className="small text-muted">
              Puja inicial: <strong>{formatMoney(initialOffer)}</strong>
            </span>
          </Col>
          <Col>
            <span className="small text-muted">
              Puja actual: <strong>{formatMoney(currentOffer)}</strong>
            </span>
          </Col>
          <Col>
            <span className="small text-muted">
              Tu puja: <strong>{formatMoney(myOffer)}</strong>
            </span>
          </Col>
          <Col className="mt-2">
            <Row className="justify-content-center">
              <Col xs={8}>
                <Button
                  className="w-100"
                  color="danger"
                  size="sm"
                  onClick={toggleIsOpen}
                >
                  Retirar puja
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {isOpen && <RetireBid isOpen={isOpen} toggle={toggleIsOpen} />}
    </Card>
  );
}

export default BidsQuickView;
