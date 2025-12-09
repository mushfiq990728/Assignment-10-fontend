import React, { useEffect, useState } from "react";
import api from "../api/client";

const PopulerSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api
      .get("/services", { params: { limit: 6 } }) // GET /services?limit=6
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-8 px-4 md:px-[145px]">
      <div>
        <h1 className="font-bold text-3xl text-center">
          Popular Winter Care Services
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.slice(0, 3).map((service) => {
          const title = service.name || service.serviceName;
          const provider =
            service.email || service.providerName || "Unknown provider";
          const price = service.price ?? 0;
          const description = service.description;
          const image = service.image;
          const id = service._id || service.serviceId;

          return (
            <div
              key={id}
              className="card bg-base-100 w-full shadow-sm border"
            >
              <figure>
                <img
                  src={image}
                  alt={title}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-sm text-gray-600">by {provider}</p>
                <p className="text-sm line-clamp-3">{description}</p>

                <div className="flex items-center gap-2 mt-2">
                  <span className="badge badge-primary">
                    {service.category === "Pets"
                      ? "Free for Adoption"
                      : `৳${price}`}
                  </span>
                  {service.rating && (
                    <span className="badge badge-secondary">
                      ⭐ {service.rating}
                    </span>
                  )}
                </div>

                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopulerSection;
