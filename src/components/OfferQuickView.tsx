import { Button, Card, Col, Container, Row } from "reactstrap";
import useToggleOpen from "../hooks/toggle-open.hooks";
import CloseOffer from "./CloseOffer";
import { formatMoney } from "../helpers/formatters.helper";

interface Props {
  name: string;
  initialOffer: string;
  currentOffer: string;
}
function OfferQuickView({ name, initialOffer, currentOffer }: Props) {
  const { isOpen, toggleIsOpen } = useToggleOpen();
  return (
    <Card body className="my-2">
      <Container>
        <Row>
          <Col xs={12}>
            <span className="h6">{name}</span>
          </Col>
          <Col xs={12}>
            <span className="small text-muted">
              Puja inicial: <strong>{formatMoney(initialOffer)}</strong>
            </span>
          </Col>
          <Col xs={12}>
            <span className="small text-muted">
              Puja actual: <strong>{formatMoney(currentOffer)}</strong>
            </span>
          </Col>
          <Col xs={12} className="mt-2">
            <Row className="justify-content-center">
              <Col xs={8}>
                <Button
                  className="w-100"
                  color="primary"
                  size="sm"
                  onClick={toggleIsOpen}
                >
                  Cerrar oferta
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {isOpen && <CloseOffer isOpen={isOpen} toggle={toggleIsOpen} />}
    </Card>
  );
}

export default OfferQuickView;
