import { Link, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
const admin = JSON.parse(localStorage.getItem("token"));
console.log(admin, "jjj");
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark transparant navbar-dark shadow-5-strong bg-dark p-2 text-dark bg-opacity">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          TripTrek
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            {/* <div className="collapse navbar-collapse justify-content-center" id="navbarResponsive"> */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/allTour">
                  All Tours
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutUs">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              {user ? (
                <>
                  <div className="d-flex">
                    {/* <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0"> */}
                    <Link to={"/mybookings"} className="mx-2 mt-1">
                      {user.photo ? (
                        <img
                          src={`http://${window.location.hostname}:5000/userimages/${user.photo}`}
                          alt="profile"
                          className="img-fluid rounded-circle"
                          style={{ height: "55px", width: "50px" }}
                        />
                      ) : (
                        <img
                          src="/images/dummy-profile.png"
                          alt="profile"
                          className="img-fluid rounded-circle"
                          style={{ height: "55px", width: "50px" }}
                        />
                      )}
                    </Link>
                    {/* </div> */}
                    {/* <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0"> */}
                    <div className="mx-2">
                      <h4 className="text-info">{user.name}</h4>
                      <h5 className="text-white">{user.email}</h5>
                    </div>
                  </div>
                  <button
                    className="btn btn-warning rounded-5 mt-2 d-md-flex justify-content-md-end"
                    style={{ height: "50px" }}
                    type="button"
                    onClick={handleLogout}
                  >
                    <IoMdLogOut fontSize="22px" className="mt-2" />
                  </button>
                </>
              ) : admin == null ? (
                <>
                  <button
                    className="btn btn-outline-light me-md-2 rounded-pill"
                    type="button"
                    onClick={() => {
                      navigate("/signUp");
                    }}
                  >
                    SIGN UP
                  </button>
                  <button
                    className="btn btn-warning rounded-pill"
                    type="button"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    LOG IN
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-warning rounded-pill"
                  type="button"
                  onClick={() => {
                    navigate("/adminHome");
                  }}
                >
                  ADMIN
                </button>
              )}

              {/* </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
