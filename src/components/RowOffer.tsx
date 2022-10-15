import { Card, Col, Row } from "reactstrap";
import { formatMoney } from "../helpers/formatters.helper";

interface Props {
  item: {
    name: string;
    initialBid: string;
    currentBid: string;
    publishedAt: string;
    status: string;
  };
}
function RowOffer({
  item: { name, initialBid, currentBid, publishedAt, status },
}: Props) {
  return (
    <Card body className="my-1" style={{ cursor: "pointer" }}>
      <Row
        className={
          status === "Closed" ? "text-decoration-line-through text-muted" : ""
        }
      >
        <Col>{name}</Col>
        <Col className="text-end">{formatMoney(initialBid)}</Col>
        <Col className="text-end">{formatMoney(currentBid)}</Col>
        <Col className="text-center">
          {new Date(publishedAt).toLocaleString()}
        </Col>
        <Col className="text-center">{status}</Col>
      </Row>
    </Card>
  );
}

export default RowOffer;
