import PropTypes from "prop-types";
import Slider from "react-slick";
import { Row, Col } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  centerMode: true,
  centerPadding: "0px",
  arrows: true,
  nextArrow: <FaChevronRight color="#005F9E" />,
  prevArrow: <FaChevronLeft color="#005F9E" />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function OurHappyClients({ happyClients }) {
  return (
    <Row style={{ backgroundColor: "#FBFBFB" }}>
      <Col>
        <div className="our_happy_clients text-center">
          <h1 style={{ paddingTop: "50px" }}>Our happy Clients</h1>
        </div>
        <Row style={{ marginBottom: "150px" }}>
          <Col xs={1} />
          <Col xs={10}>
            <Slider {...settings}>
              {happyClients.map((client) => (
                <div key={client.profile_photo_url}>
                  <div className="slider-div">
                    <div className="client-slide container">
                      <Row
                        style={{ padding: "5px 0px", boxSizing: "border-box" }}
                      >
                        <Col
                          sm={3}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingRight: "0px",
                            paddingTop: "10px",
                          }}
                        >
                          <div className="client-img">
                            <img
                              src={client.profile_photo_url}
                              alt={client.author_name}
                            />
                          </div>
                        </Col>
                        <Col
                          sm={9}
                          className="pb-md-0 pb-3"
                          style={{ paddingTop: "10px" }}
                        >
                          <h3 className="client-name">{client.author_name}</h3>
                          <div className="star-section">
                            <StarRatings
                              rating={client.rating}
                              starEmptyColor="grey"
                              starRatedColor="#E38106"
                              numberOfStars={5}
                              starDimension="15px"
                              starSpacing="0px"
                              name="rating"
                            />
                            <span>{client.relative_time_description}</span>
                          </div>
                          <div className="client-comment">
                            <p>
                              {client.text.length > 150
                                ? `${client.text.substring(0, 130)}...`
                                : client.text}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
          <Col xs={1} />
        </Row>
      </Col>
    </Row>
  );
}

OurHappyClients.propTypes = {
  happyClients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OurHappyClients;
