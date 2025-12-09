import React, { useContext, useState } from "react";
import api from "../api/client";
import { AuthContext } from "../provider/AuthProvider";

const OrderModal = ({ listing, onClose }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const quantity = listing.category === "Pets" ? 1 : Number(form.quantity.value || 1);

    const order = {
      productId: listing._id,
      productName: listing.name,
      buyerName: user.displayName || user.email,
      email: user.email,
      quantity,
      price: listing.price,
      address: form.address.value,
      phone: form.phone.value,
      date: form.date.value,
      additionalNotes: form.notes.value,
    };

    try {
      const res = await api.post("/orders", order);
      console.log("Order saved:", res.data);
      // toast.success("Order placed!");
      onClose();
    } catch (err) {
      console.error(err);
      // toast.error("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog open className="modal">
      <div className="modal-box">
        <form onSubmit={handleOrder} className="space-y-3">
          <h3 className="font-bold text-lg mb-2">
            Order: {listing.name}
          </h3>

          <input
            type="text"
            value={user.displayName || ""}
            readOnly
            className="input input-bordered w-full"
            placeholder="Buyer Name"
          />
          <input
            type="email"
            value={user.email}
            readOnly
            className="input input-bordered w-full"
          />
          <input
            type="text"
            value={listing._id}
            readOnly
            className="input input-bordered w-full"
          />
          <input
            type="text"
            value={listing.name}
            readOnly
            className="input input-bordered w-full"
          />

          {listing.category !== "Pets" && (
            <input
              type="number"
              name="quantity"
              min="1"
              defaultValue="1"
              className="input input-bordered w-full"
            />
          )}

          <input
            type="text"
            value={listing.price}
            readOnly
            className="input input-bordered w-full"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input input-bordered w-full"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="input input-bordered w-full"
            required
          />

          <input
            type="date"
            name="date"
            className="input input-bordered w-full"
            required
          />

          <textarea
            name="notes"
            rows="3"
            placeholder="Additional notes"
            className="textarea textarea-bordered w-full"
          />

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost btn-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-sm"
              disabled={loading}
            >
              {loading ? "Placing..." : "Confirm Order"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default OrderModal;
