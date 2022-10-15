import { Card, Col, Row } from "reactstrap";
import { formatMoney } from "../helpers/formatters.helper";

interface Props {
  item: {
    name: string;
    myBid: string;
    currentBid: string;
    publishedAt: string;
    status: string;
  };
}
function RowBid({
  item: { name, myBid, currentBid, publishedAt, status },
}: Props) {
  return (
    <Card body className="my-1" style={{ cursor: "pointer" }}>
      <Row
        className={
          status === "Closed" ? "text-decoration-line-through text-muted" : ""
        }
      >
        <Col>{name}</Col>
        <Col className="text-end d-none d-md-block">{formatMoney(myBid)}</Col>
        <Col className="text-end">{formatMoney(currentBid)}</Col>
        <Col className="text-center d-none d-md-block">
          {new Date(publishedAt).toLocaleString()}
        </Col>
        <Col className="text-center d-none d-lg-block">{status}</Col>
      </Row>
    </Card>
  );
}

export default RowBid;
