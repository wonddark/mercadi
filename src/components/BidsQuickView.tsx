import { Button, Card, Col, Container, Row, Tooltip } from "reactstrap";
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
function BidsQuickView({
  id,
  name,
  initialOffer,
  currentOffer,
  myOffer,
}: Props) {
  const { isOpen, toggleIsOpen } = useToggleOpen();
  const { isOpen: tooltipOpen, toggleIsOpen: toggleTooltip } = useToggleOpen();
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
                id={`retire-bid-${id}`}
              >
                <i className="bi bi-door-open-fill" />
              </Button>
              <Tooltip
                target={`retire-bid-${id}`}
                isOpen={tooltipOpen}
                toggle={toggleTooltip}
                placement="left"
              >
                Retirar la puja
              </Tooltip>
            </Col>
          </Row>
        </Row>
      </Container>
      {isOpen && <RetireBid isOpen={isOpen} toggle={toggleIsOpen} />}
    </Card>
  );
}

export default BidsQuickView;
