import PropTypes from "prop-types";
import { API_URL } from "../../apiServices";

function Expertise({ data }) {
  return (
    <section>
      <div
        className="container expertise"
        style={{ background: `url("${API_URL + data.sectionImage.url}")` }}
      >
        <div className="row my-5">
          <div className="col-md-3" />
          <div className="col-md-6 text-justify">
            <p className="expertise_para text-center">
              {data.description.length > 330
                ? `${data.description.substring(0, 330)}...`
                : data.description}
            </p>
          </div>
          <div className="col-md-3 expertise_Mobile_img">
            <img
              src={`${API_URL + data.sectionImage.url}`}
              className="w-100"
              alt={data.sectionImage.filename}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Expertise.propTypes = {
  data: PropTypes.object,
};

export default Expertise;
