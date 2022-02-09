/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

const Image404 = "/img/404.png";

function CustomErrorPage() {
  return (
    <Container
      fluid
      style={{ background: "#edf0f7" }}
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      <Container>
        <Row className="align-items-center justify-content-center ">
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="d-flex d-sm-block d-md-block d-lg-block align-items-center justify-content-start flex-column text-center text-sm-center text-md-start text-lg-start"
          >
            <h1 style={{ fontWeight: 800 }}>Oops, something's gone wrong!</h1>
            <h5
              style={{ fontWeight: 500, lineHeight: "30px" }}
              className="my-4"
            >
              Not to worry, why don't you try one of these helpful links:
            </h5>
            <div>
              <Link href="/">
                <a>
                  <Button className="my-3">Go to Homepage</Button>
                </a>
              </Link>

              <Link href="/contact">
                <a>
                  <Button className="mx-3 my-3">Contact Us</Button>
                </a>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} className="text-center">
            <img
              className="img-fluid py-2 my-2"
              src={Image404}
              alt="error-img"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CustomErrorPage;
