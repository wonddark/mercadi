import { Col, Container, Row } from "reactstrap";
import FeedQuickAccess from "./FeedQuickAccess";

function HomeFeed() {
  return (
    <Container>
      <Row xs={1} md={2}>
        <Col md={8}>
          <h1>Here will go the stories</h1>
        </Col>
        <Col md={4}>
          <FeedQuickAccess />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeFeed;
