import React, { useEffect, useState } from 'react';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='mt-8 px-4 md:px-[145px]'>
            <div className='text-center mb-8'>
                <h1 className='font-bold text-3xl'>Our Winter Care Services</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => (
                        <div key={service.serviceId} className="card bg-base-100 w-full shadow-sm">
                            <figure>
                                <img
                                    src={service.image}
                                    alt={service.serviceName}
                                    className='h-48 w-full object-cover' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.serviceName}</h2>
                                <p className="text-sm text-gray-600">by {service.providerName}</p>
                                <p className='text-sm'>{service.description}</p>
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

export default Services;