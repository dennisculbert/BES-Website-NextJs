import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import { API_URL } from "../../apiServices";

function Carousal({ portfolioImages = [] }) {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      stopOnHover={false}
      showArrows={false}
      showStatus={false}
    >
      {portfolioImages.map((item, i) => (
        <img key={i} alt="portfolio" src={API_URL + item.url} />
      ))}
    </Carousel>
  );
}

Carousal.propTypes = {
  portfolioImages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousal;
