import { Button, Card, Col, Container, Row } from "reactstrap";
import useToggleOpen from "../hooks/toggle-open.hooks";
import CloseOffer from "./CloseOffer";
import { formatMoney } from "../helpers/formatters.helper";

interface Props {
  id: string;
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
          <Row className="justify-content-between">
            <Col xs={10}>
              <span className="small text-muted d-block">
                Puja inicial: <strong>{formatMoney(initialOffer)}</strong>
              </span>
              <span className="small text-muted d-block">
                Puja actual: <strong>{formatMoney(currentOffer)}</strong>
              </span>
            </Col>
            <Col xs={1} className="mt-2">
              <Button
                color="primary"
                onClick={toggleIsOpen}
                size="sm"
                title="Cerrar oferta"
              >
                <i className="bi bi-x-circle-fill" />
              </Button>
            </Col>
          </Row>
        </Row>
      </Container>
      {isOpen && <CloseOffer isOpen={isOpen} toggle={toggleIsOpen} />}
    </Card>
  );
}

export default OfferQuickView;
