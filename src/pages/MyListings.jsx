
import React, { useContext, useEffect, useState } from "react";
import api from "../api/client";
import { AuthContext } from "../provider/AuthProvider";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyListings = () => {
    if (!user?.email) return;

    setLoading(true);
    api
      .get("/services", { params: { email: user.email } }) // GET /services?email=...
      .then((res) => setListings(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMyListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);

  const handleDelete = async (id) => {
    const sure = window.confirm("Are you sure you want to delete this listing?");
    if (!sure) return;

    try {
      const res = await api.delete(`/services/${id}`);
      if (res.data.deletedCount > 0) {
        setListings((prev) => prev.filter((item) => item._id !== id));
        // toast.success("Listing deleted");
      }
    } catch (err) {
      console.error(err);
      // toast.error("Failed to delete listing");
    }
  };

  // You can later implement update (PUT /services/:id)
  const handleUpdate = (id) => {
    // For now just a placeholder. Later you can open a modal or navigate.
    console.log("Update clicked for:", id);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 md:px-[145px] py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">My Listings</h1>

      {listings.length === 0 ? (
        <p className="text-gray-500">You have not added any listings yet.</p>
      ) : (
        <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Location</th>
                <th>Price</th>
                <th>Date</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="avatar">
                      <div className="w-14 h-14 rounded">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.location}</td>
                  <td>
                    {item.category === "Pets"
                      ? "Free"
                      : `৳${item.price ?? 0}`}
                  </td>
                  <td>{item.date}</td>
                  <td>
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleUpdate(item._id)}
                        className="btn btn-sm btn-outline"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-sm btn-error text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyListings;
