import React from "react";
import { Link, useAsyncError, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AdminNav from "../navbar/AdminNav";
const EditTours = () => {
  const params = useParams();
  const [data, setData] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",

    description: "",
    price: null,
    maxGroupSize: null,
    tourDate: ""
  });
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/tour/${params.id}`);
      console.log(res.data, "tour");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data, "data");
  useEffect(() => {
    getData();
  }, []);
  const [photo, setPhoto] = useState(null);
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleFileChange = e => {
    setPhoto(e.target.files[0]);
  };
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("photo", photo);
      formData.append("title", data.title);
      formData.append("city", data.city);
      formData.append("address", data.address);
      formData.append("distance", data.distance);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("maxGroupSize", data.maxGroupSize);
      formData.append("tourDate", data.tourDate);
      const res = await axios.patch(
        `http://localhost:5000/tour/` + params.id,
        formData
      );
      console.log(res.data, "tour");
      toast.success("tour data updated successfully", {});
      navigate("/viewTours");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error, {});
    }
  };
  console.log(data, "data");
  return (
    <div className="px-md-5 px-sm-0 py-md-5 py-sm-0  mb-2 bg-warning text-dark">
      <div className="mt-2">
        <AdminNav />
        <div className="container-fluid bg-light px-md-5 px-sm-0 py-md-5 py-sm-0  bg-opacity-50  tourbg">
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-5 ">
              <div className="card bg-success p-5 text-dark bg-opacity-25  ">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <h1>ADD TOURS</h1>
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        title
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        placeholder="Enter Title"
                        aria-describedby="emailHelp"
                      />
                    </div>{" "}
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        city
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="city"
                        value={data.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                        aria-describedby="emailHelp"
                      />
                    </div>{" "}
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                        aria-describedby="emailHelp"
                      />
                    </div>{" "}
                    <div class="mb-3">
                      <label for="formFile" class="form-label">
                        Upload new photo
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        name="photo"
                        // value={data.photo}
                        onChange={handleFileChange}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        description
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        placeholder="Enter description"
                        aria-describedby="emailHelp"
                      />
                    </div>{" "}
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        price
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="price"
                        value={data.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        maxGroupSize
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="maxGroupSize"
                        value={data.maxGroupSize}
                        onChange={handleChange}
                        placeholder="Enter maxGroupSize"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        Tour Date
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="exampleInputName"
                        name="tourDate"
                        value={data.tourDate}
                        onChange={handleChange}
                        placeholder="Enter Tour Date"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <button type="submit" class="btn btn-warning">
                      Submit
                    </button>
                    <div className="mt-3">
                      <Link class="form-text mt-5" to="/login">
                        Alredy Registered.?..Login here...
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTours;
