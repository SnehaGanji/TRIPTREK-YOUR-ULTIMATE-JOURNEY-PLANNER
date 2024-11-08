import {
  BsFacebook,
  BsFillArrowUpCircleFill,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-end">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            style={{
              // padding: "2rem",
              // fontSize: "20px",
              bottom: "30px",
              right: "20px",
              backgroundColor: "#0C9",
              color: "#fff",
              textAlign: "center",
              position: "fixed",
              borderRadius: "1rem",
            }}
          >
            <BsFillArrowUpCircleFill fontSize="60px" />
          </button>
        </div>
        <footer
          className="text-white text-center text-lg-start rounded-5"
          style={{ backgroundColor: "#08558f" }}
        >
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">
                TripTrek Brings Exciting New Tours.
                </h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, nihil sit a maxime illo veniam neque alias aliquam
                  ducimus, eaque sapiente sed qui at exercitationem? Non
                  inventore suscipit facilis laboriosam, soluta eum. Ut
                  molestiae provident porro aspernatur quisquam excepturi quae.
                </p>

                <div className="mt-4">
                  <Link
                    type="button"
                    className="btn btn-floating btn-warning btn-lg rounded-5"
                  >
                    <BsFacebook fontSize="22px" color="white" />
                  </Link>
                  <Link
                    type="button"
                    className="btn btn-floating btn-warning btn-lg rounded-5"
                  >
                    <BsTwitter fontSize="22px" color="white" />
                  </Link>
                  <Link
                    type="button"
                    className="btn btn-floating btn-warning btn-lg rounded-5"
                  >
                    <BsInstagram fontSize="22px" color="white" />
                  </Link>
                  <Link
                    type="button"
                    className="btn btn-floating btn-warning btn-lg rounded-5"
                  >
                    <FcGoogle fontSize="22px" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">GET to Know US</h5>

                <ul>
                  <li className="mb-3">
                    <span className="ms-2">About Us</span>
                  </li>
                  <li className="mb-3">
                    <span className="ms-2">Rules & Reservation</span>
                  </li>
                  <li className="mb-3">
                    <span className="ms-2">Accessibility</span>
                  </li>
                  <li className="mb-3">
                    <span className="ms-2">Site Map</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Plan with Us</h5>

                <ul>
                  <li className="mb-3">
                    <span className="ms-2">Find Trip Inspiration</span>
                  </li>
                  <li className="mb-3">
                    <span className="ms-2">Build a Trip</span>
                  </li>
                  <li className="mb-3">
                    <span className="ms-2">Buy a Pass</span>
                  </li>
                  <li className="mb-3">
                    <span className="ms-2">Enter a Lottery</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Let Us Help You</h5>

                <ul>
                  <li className="mb-3">
                    <span className="ms-2">Your Account</span>
                  </li>
                  <li className="mb-3">
                    <span className="ms-2">Your Reservations</span>
                  </li>
                  <li className="mb-3">
                    <span className="ms-2">Contact Us</span>
                  </li>
                  <li className="mb-3">
                    <span className="ms-2">Submit Feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="text-center p-3 rounded-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024 Copyright :{" "}
            <Link className="text-white" to="#">
            TripTrek 
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
