import PropTypes from "prop-types";
import { API_URL } from "../../apiServices";

function OurMission({ data }) {
  return (
    <section className="overview-block-pb our_mission" key={data._id}>
      <div className="container">
        <div className="row main-row">
          <div className="col-md-6 d-flex justify-content-center align-items-center order-1 order-md-1 ">
            <div className="w-100">
              <img
                src={`${API_URL + data.sectionImage.url}`}
                alt={data.sectionImage.filename}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-md-6 order-2 order-md-2 my-auto about_mission_div1 ">
            <div className="mt-md-0 mt-5 ">
              <h3
                className="font-weight-bold mb-lg-2 mt-3 mt-md-0 text-uppercase"
                style={{ color: "#0a5da1" }}
              >
                {data.heading}
              </h3>
              <p className="mt-3 text-justify">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

OurMission.propTypes = {
  data: PropTypes.object,
};

export default OurMission;
