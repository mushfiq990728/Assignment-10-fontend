import React from 'react';

const ExpertVets = () => {
    const vets = [
        {
            vetId: 1,
            name: "Dr. Sarah Mitchell",
            specialization: "Winter Pet Care & Nutrition",
            experience: "12 years",
            email: "dr.sarah@warmpaws.com",
            phone: "+1 (555) 123-4567",
            image: "https://i.postimg.cc/vet1.png",
            bio: "Specialized in cold weather pet health management and winter nutrition planning for all breeds.",
            rating: 4.9,
            consultations: 850
        },
        {
            vetId: 2,
            name: "Dr. James Cooper",
            specialization: "Cold Weather Injuries & Grooming",
            experience: "9 years",
            email: "dr.james@warmpaws.com",
            phone: "+1 (555) 234-5678",
            image: "https://i.postimg.cc/vet2.png",
            bio: "Expert in treating frostbite, paw injuries, and providing winter grooming solutions for pets.",
            rating: 4.8,
            consultations: 720
        },
        {
            vetId: 3,
            name: "Dr. Emily Rodriguez",
            specialization: "Winter Wellness & Preventive Care",
            experience: "15 years",
            email: "dr.emily@warmpaws.com",
            phone: "+1 (555) 345-6789",
            image: "https://i.postimg.cc/vet3.png",
            bio: "Focuses on preventive winter care strategies, immune system support, and seasonal health checkups.",
            rating: 5.0,
            consultations: 1200
        }
    ];

    return (
        <div className='mt-16 px-4 md:px-[145px]'>
            <div className='text-center mb-12'>
                <h1 className='font-bold text-3xl mb-2'>Meet Our Expert Vets</h1>
                <p className='text-gray-600'>Trusted professionals dedicated to your pet's winter wellness</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {vets.map(vet => (
                    <div key={vet.vetId} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                        <figure className='pt-6'>
                            <img
                                src={vet.image}
                                alt={vet.name}
                                className='rounded-full w-32 h-32 object-cover border-4 border-primary'
                            />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title justify-center text-xl">{vet.name}</h2>
                            <p className='text-primary font-semibold'>{vet.specialization}</p>
                            <p className='text-sm text-gray-600 mt-2'>{vet.bio}</p>
                            
                            <div className='flex justify-center gap-4 mt-3'>
                                <div className='badge badge-outline'>
                                    ⭐ {vet.rating}
                                </div>
                                <div className='badge badge-outline'>
                                    {vet.experience}
                                </div>
                            </div>
                            
                            <p className='text-sm text-gray-500 mt-2'>
                                {vet.consultations}+ consultations
                            </p>
                            
                            <div className="card-actions justify-center mt-4">
                                <button className="btn btn-primary btn-sm">Book Consultation</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpertVets;