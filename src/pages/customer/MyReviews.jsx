import React, { useEffect, useState } from "react";
import { deleteReview, getReviews } from "../../api/review";
import { useSelector } from "react-redux";
import Paginations from "../../components/paginations/paginations";
import { getTourById } from "../../api/tour";
import { toast } from "react-toastify";

const MyReviews = () => {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(1);

  const allReviews = async () => {
    const res = await getReviews();
    let item = [];
    for (let i of res.data) {
      if (i.user === user._id) {
        const tour = await getTourById(i.tourId);
        i.tourId = tour.data;
        item.push(i);
      }
    }
    setData(item);
  };

  useEffect(() => {
    allReviews();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  const handleDelete = async (id) => {
    try {
      await deleteReview(id);
      toast.success("Deleted Successfully");
      allReviews();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="col py-3  mt-5 px-md-5 px-sm-0">
      <h1 className="bold mb-5 ">MY REVIEWS</h1>
      {currentRecords &&
        currentRecords.map((data, index) => {
          return (
            <div className="card" key={data._id}>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3 px-3">
                    <div
                      className="card-img mt-4 mb-4"
                      style={{ flexDirection: 1 }}
                    >
                      {user.photo ? (
                        <img
                          className="img-fluid img-thumbnail rounded-5"
                          alt="ima"
                          src={`http://${window.location.hostname}:5000/userimages/${user.photo}`}
                        />
                      ) : (
                        <img
                          className="img-fluid img-thumbnail rounded-5"
                          alt="ima"
                          src="data:image/jpeg;base64,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"
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-sm-7 px-5 mt-3 text-start">
                    <b className="fs-5 mb-3 text-start">{user?.name}</b>
                    <h5 className="text-dark mt-2 text-start">
                      Tour: {data.tourId.title}
                    </h5>
                    <h6 className="text-dark mt-2 text-start">
                      {data.message}
                    </h6>
                    <h6 className="text-warning mt-2 text-start">
                      {data.rating === 5 ? (
                        <>⭐⭐⭐⭐⭐</>
                      ) : data.rating === 4 ? (
                        <>⭐⭐⭐⭐</>
                      ) : data.rating === 3 ? (
                        <>⭐⭐⭐</>
                      ) : data.rating === 2 ? (
                        <>⭐⭐</>
                      ) : (
                        <>⭐</>
                      )}
                    </h6>

                    <div className="row">
                      <div className="col-sm-3 px-md-1 px-sm-0 mb-3 mt-3">
                        <button
                          className="btn btn-dark   text-center rounded-5 hover:dark button:hover dark"
                          onClick={() => handleDelete(data._id)}
                        >
                          DELETE
                        </button>
                      </div>
                      {/* <div className="col-sm-3 px-sm-0 mb-3 mt-3 text-center">
                    <button className="btn btn-warning rounded-5 hover:dark button:hover dark">
                      EDIT
                    </button>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      <div className="row w-50 float-end mt-3">
        <Paginations
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default MyReviews;
