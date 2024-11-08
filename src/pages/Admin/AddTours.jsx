import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AdminNav from "../navbar/AdminNav";

const AddTours = () => {
  const [data, setData] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",
    description: "",
    price: null,
    maxGroupSize: null,
    tourDate: "",
    startLocation: {
      latitude: "",
      longitude: "",
    },
    endLocation: {
      latitude: "",
      longitude: "",
    },
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    const [field, key] = name.split(".");

    setData((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        [key]: value,
      },
    }));
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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

      formData.append("startLocation[latitude]", data.startLocation.latitude);
      formData.append("startLocation[longitude]", data.startLocation.longitude);
      formData.append("endLocation[latitude]", data.endLocation.latitude);
      formData.append("endLocation[longitude]", data.endLocation.longitude);

      const res = await axios.post("http://localhost:5000/tour", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Tour added successfully", {});
      navigate("/viewTours");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.msg || "An error occurred", {});
    }
  };

  return (
    <div className="px-md-5 px-sm-0 py-md-5 py-sm-0  mb-2 tourbg text-dark">
      <div className="mt-2">
        <AdminNav />
        <div className="container-fluid bg-light px-md-5 px-sm-0 py-md-5 py-sm-0  bg-opacity-50">
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-5">
              <div className="card bg-success p-5 text-dark bg-opacity-25">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <h1>ADD TOURS</h1>

                    <div className="mb-3">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        placeholder="Enter Title"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={data.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Upload Photo</label>
                      <input
                        className="form-control"
                        type="file"
                        name="photo"
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        placeholder="Enter description"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={data.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Max Group Size</label>
                      <input
                        type="number"
                        className="form-control"
                        name="maxGroupSize"
                        value={data.maxGroupSize}
                        onChange={handleChange}
                        placeholder="Enter max group size"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Tour Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="tourDate"
                        value={data.tourDate}
                        onChange={handleChange}
                      />
                    </div>

                    <h3>Start Location</h3>
                    <div className="mb-3">
                      <label className="form-label">Latitude</label>
                      <input
                        type="number"
                        className="form-control"
                        name="startLocation.latitude"
                        value={data.startLocation.latitude}
                        onChange={handleLocationChange}
                        placeholder="Enter latitude"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Longitude</label>
                      <input
                        type="number"
                        className="form-control"
                        name="startLocation.longitude"
                        value={data.startLocation.longitude}
                        onChange={handleLocationChange}
                        placeholder="Enter longitude"
                      />
                    </div>

                    <h3>End Location</h3>
                    <div className="mb-3">
                      <label className="form-label">Latitude</label>
                      <input
                        type="number"
                        className="form-control"
                        name="endLocation.latitude"
                        value={data.endLocation.latitude}
                        onChange={handleLocationChange}
                        placeholder="Enter latitude"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Longitude</label>
                      <input
                        type="number"
                        className="form-control"
                        name="endLocation.longitude"
                        value={data.endLocation.longitude}
                        onChange={handleLocationChange}
                        placeholder="Enter longitude"
                      />
                    </div>

                    <button type="submit" className="btn btn-warning">
                      Submit
                    </button>
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

export default AddTours;
