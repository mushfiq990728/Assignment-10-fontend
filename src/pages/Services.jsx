import React, { useEffect, useState } from "react";
import api from "../api/client";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const fetchServices = () => {
    setLoading(true);
    const params = {};
    if (category !== "All") params.category = category;

    api
      .get("/services", { params })
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const filtered = services.filter((s) =>
    s.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-8 px-4 md:px-[145px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="font-bold text-3xl">Pets & Supplies</h1>

        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Search by name..."
            className="input input-bordered input-sm md:input-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select select-bordered select-sm md:select-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care products">Care products</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <span className="loading loading-spinner loading-lg" />
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500">No items found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <div
              key={service._id}
              className="card bg-base-100 w-full shadow-sm border"
            >
              <figure>
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p className="text-sm text-gray-600">
                  Category: {service.category}
                </p>
                <p className="text-sm text-gray-600">
                  Location: {service.location}
                </p>
                <p className="text-sm mt-1 line-clamp-2">
                  {service.description}
                </p>
                <p className="mt-2 font-semibold">
                  {service.category === "Pets"
                    ? "Free for Adoption"
                    : `৳${service.price}`}
                </p>
                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/services/${service._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
