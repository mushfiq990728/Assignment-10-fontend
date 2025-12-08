import React, { useEffect, useState } from 'react';

const PopulerSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())  // Fixed: Added parentheses
            .then(data => setServices(data))
            .catch(err => console.log(err))  // Fixed: Corrected console.log
    }, [])

    return (
        <div className='mt-8 px-[145px]'>
            <div>
                <h1 className='font-bold text-3xl text-center'>Popular Winter Care Services</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    services.slice(0,3).map(service => (
                        <div key={service.serviceId} className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={service.image}
                                    alt={service.serviceName} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.serviceName}</h2>
                                <p className="text-sm text-gray-600">by {service.providerName}</p>
                                <p>{service.description}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="badge badge-primary">${service.price}</span>
                                    <span className="badge badge-secondary">⭐ {service.rating}</span>
                                    <span className="text-sm">{service.slotsAvailable} slots</span>
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <button className="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopulerSection;