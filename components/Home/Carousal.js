import PropTypes from "prop-types";
import Image from "next/image";
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
        // <img key={i} alt="portfolio" src={API_URL + item.url} loading="lazy" />
        <Image
          key={i}
          src={API_URL + item.url}
          alt="portfolio"
          width={1080}
          height={500}
        />
      ))}
    </Carousel>
  );
}

Carousal.propTypes = {
  portfolioImages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousal;
