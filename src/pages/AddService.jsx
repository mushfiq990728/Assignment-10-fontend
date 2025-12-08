import React, { useContext, useState } from "react";
import axios from "axios";                           // 👈 add this
import { AuthContext } from "../provider/AuthProvider";

const AddService = () => {
  const { user, loading } = useContext(AuthContext);
  const userEmail = user?.email || "";

  const [category, setCategory] = useState("Pets");
  const [price, setPrice] = useState(0);

  const defaultPrices = {
    Pets: 0,
    Food: 300,
    Accessories: 150,
    "Care products": 200,
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-sm">Loading user...</p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const categoryValue = form.category.value;
    const priceValue = form.price.value || 0;
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = userEmail;

    const formData = {
      name,
      category: categoryValue,
      price: Number(priceValue),
      location,
      description,
      image,
      date,
      email,
    };

    console.log("Sending to backend:", formData);

    try {
      const res = await axios.post("http://localhost:5000/services", formData); //  single POST
      console.log("Response from backend:", res.data);

      form.reset();
      setCategory("Pets");
      setPrice(0);
    } catch (err) {
      console.error("Error sending data:", err);
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    const newPrice = defaultPrices[value] ?? 0;
    setPrice(newPrice);
  };

  const handlePriceChange = (e) => {
    if (category === "Pets") return;
    setPrice(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Add Product / Pet
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product / Pet Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Ex: Persian Cat, Cat Food, Toy Mouse"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base focus:outline-none 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Category + Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                value={category}
                onChange={handleCategoryChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base bg-white 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Pets">Pets</option>
                <option value="Food">Food</option>
                <option value="Accessories">Accessories</option>
                <option value="Care products">Care products</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (৳)
              </label>
              <input
                type="number"
                name="price"
                min="0"
                value={price}
                onChange={handlePriceChange}
                disabled={category === "Pets"}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${category === "Pets" ? "bg-gray-100 cursor-not-allowed" : ""}`}
              />
              <p className="mt-1 text-xs text-gray-500">
                Different default price is set for each category.
                For <strong>Pets</strong>, price is always <strong>0</strong>.
              </p>
            </div>
          </div>

          {/* Location + Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Ex: Dhaka, Bangladesh"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pick-up Date
              </label>
              <input
                type="date"
                name="date"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write details about the pet/product..."
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email (readonly, from auth) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email (Current User)
            </label>
            <input
              type="email"
              name="email"
              readOnly
              value={userEmail}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base 
              bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 rounded-xl px-4 py-2.5 text-sm md:text-base font-semibold 
            bg-blue-600 text-white hover:bg-blue-700 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
