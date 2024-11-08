import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ViewSingleTour from "./pages/home/ViewSingleTour";
import Login from "./pages/login/Login";
import Register from "./pages/signUp/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/home/Contact";
import Payment from "./pages/customer/Payment";
import MyBookings from "./pages/customer/MyBookings";
import MyReviews from "./pages/customer/MyReviews";
import EditProfile from "./pages/customer/EditProfile";
import Billing from "./pages/customer/Billing";
// import About from "./pages/home/About";
import AboutUs from "./pages/home/AboutUs";
import AddTours from "./pages/Admin/AddTours";
import ViewTours from "./pages/Admin/ViewTours";
import EditTours from "./pages/Admin/EditTours";
import ViewUsers from "./pages/Admin/ViewUsers";
import "react-toastify/dist/ReactToastify.css";
import AdminHome from "./pages/Admin/AdminHome";
import EditUser from "./pages/Admin/EditUser";
import ViewContacts from "./pages/Admin/ViewContacts";
import ViewBookings from "./pages/Admin/ViewBookings";
import Gallery from "./pages/home/Gallery";
import AllTours from "./pages/tours/AllTours";
import SearchPlace from "./pages/explorePlace/SearchPlace";
import Register1 from "./pages/signUp/Register1";

// imimport Login1 from "./pages/login/Login1";port AllTours from "./pages/tours/AllTours";
// import Gallery from "./pages/home/Gallery";

function App() {
  
  return (
    <>
      <ToastContainer />
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/view/:id" element={<ViewSingleTour />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<Register />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/payment/:id" element={<Payment />} />
        <Route exact path="/myBookings" element={<MyBookings />} />
        <Route exact path="/myReviews" element={<MyReviews />} />
        <Route exact path="/editProfile" element={<EditProfile />} />
        <Route exact path="/billing" element={<Billing />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/addTours" element={<AddTours />} />
        <Route exact path="/viewTours" element={<ViewTours />} />
        <Route exact path="/editTours/:id" element={<EditTours />} />
        <Route exact path="/viewUsers" element={<ViewUsers />} />
        <Route exact path="/adminHome" element={<AdminHome />} />
        <Route exact path="/editUser/:id" element={<EditUser />} />
        <Route exact path="/viewContacts" element={<ViewContacts />} />
        <Route exact path="/viewBookings" element={<ViewBookings />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/explore" element={<SearchPlace />} />

        <Route path="/allTour" element={<AllTours />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
