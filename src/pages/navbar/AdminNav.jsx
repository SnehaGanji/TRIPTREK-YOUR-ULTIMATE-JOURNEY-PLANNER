import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const AdminNav = () => {
  const navigate = useNavigate()
   const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login");
    window.location.assign("/login");

  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark  navbar-dark shadow-5-strong bg-dark p-2 text-dark ">
        <div className="container-fluid">
        <Link class="btn btn-outline-light me-md-2 rounded-pill" to="/">
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
            {/* <div class="collapse navbar-collapse justify-content-center" id="navbarResponsive"> */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/adminHome"}>
                  HOME
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/viewTours">
                  VIEWTOURS 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/viewUsers">
                  VIEWCUSTOMERS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/viewBookings">
                  VIEW BOOKINGS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/viewContacts">
                  VIEW CONTACTS
                </Link>
              </li>
            </ul>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
             
            <button
                    className="btn btn-warning rounded-5 mt-2 d-md-flex justify-content-md-end"
                    style={{ height: "50px" }}
                    type="button"
                    onClick={handleLogout}
                  >
                    <IoMdLogOut fontSize="22px" className="mt-2" />
                  </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNav;
