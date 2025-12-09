import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../api/client";
import { AuthContext } from "../provider/AuthProvider";
import OrderModal from "../component/OrderModal";

const ListingDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [listing, setListing] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    api
      .get(`/services/${id}`)
      .then((res) => setListing(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 md:px-[145px] py-10">
      {/* show details */}
      <div className="grid md:grid-cols-2 gap-8">
        <img src={listing.image} alt={listing.name} className="w-full rounded-xl" />

        <div>
          <h1 className="text-3xl font-bold mb-2">{listing.name}</h1>
          <p className="text-sm text-gray-500 mb-1">
            Category: {listing.category}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            Owner: {listing.email}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            Location: {listing.location}
          </p>
          <p className="text-xl font-semibold mt-3">
            {listing.category === "Pets" ? "Free for Adoption" : `৳${listing.price}`}
          </p>
          <p className="mt-4 text-gray-700">{listing.description}</p>

          <button
            onClick={() => setOpen(true)}
            className="btn btn-primary mt-6"
            disabled={!user}
          >
            Adopt / Order Now
          </button>

          {!user && (
            <p className="text-xs text-red-500 mt-2">
              Please login to place an order.
            </p>
          )}
        </div>
      </div>

      {/* Order Modal */}
      {open && (
        <OrderModal listing={listing} onClose={() => setOpen(false)} />
      )}
    </div>
  );
};

export default ListingDetails;
