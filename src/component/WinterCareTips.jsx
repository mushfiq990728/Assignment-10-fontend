import React from 'react';

const WinterCareTips = () => {
    const tips = [
        {
            tipId: 1,
            title: "Keep Paws Protected",
            icon: "🐾",
            description: "Apply paw balm before walks and check for ice buildup between toes. Consider dog booties for extended outdoor time.",
            category: "Grooming",
            difficulty: "Easy"
        },
        {
            tipId: 2,
            title: "Adjust Exercise Routines",
            icon: "🏃",
            description: "Shorter, more frequent walks are better in extreme cold. Watch for signs of discomfort like whining or limping.",
            category: "Activity",
            difficulty: "Easy"
        },
        {
            tipId: 3,
            title: "Maintain Proper Hydration",
            icon: "💧",
            description: "Pets can get dehydrated in winter too. Keep water bowls filled with fresh, unfrozen water at all times.",
            category: "Health",
            difficulty: "Easy"
        },
        {
            tipId: 4,
            title: "Winter-Proof Your Home",
            icon: "🏠",
            description: "Create warm sleeping areas away from drafts. Provide extra blankets and consider heated pet beds for senior pets.",
            category: "Comfort",
            difficulty: "Medium"
        },
        {
            tipId: 5,
            title: "Boost Nutrition",
            icon: "🍖",
            description: "Pets may need extra calories in winter to maintain body heat. Consult your vet about adjusting portion sizes.",
            category: "Nutrition",
            difficulty: "Medium"
        },
        {
            tipId: 6,
            title: "Monitor Coat Health",
            icon: "✨",
            description: "Don't over-bathe in winter as it can dry out skin. Brush regularly to distribute natural oils and maintain insulation.",
            category: "Grooming",
            difficulty: "Easy"
        },
        {
            tipId: 7,
            title: "Watch for Antifreeze",
            icon: "⚠️",
            description: "Antifreeze is toxic and tastes sweet to pets. Clean up spills immediately and store safely out of reach.",
            category: "Safety",
            difficulty: "Critical"
        },
        {
            tipId: 8,
            title: "Check Heating Sources",
            icon: "🔥",
            description: "Keep pets away from fireplaces, space heaters, and heating vents to prevent burns. Provide supervised warmth only.",
            category: "Safety",
            difficulty: "Medium"
        }
    ];

    // Function to get badge color based on difficulty
    const getDifficultyColor = (difficulty) => {
        switch(difficulty) {
            case 'Easy': return 'badge-success';
            case 'Medium': return 'badge-warning';
            case 'Critical': return 'badge-error';
            default: return 'badge-primary';
        }
    };

    return (
        <div className='mt-16 px-4 md:px-[145px] bg-base-200 py-12'>
            <div className='text-center mb-12'>
                <h1 className='font-bold text-3xl mb-2'>Winter Care Tips for Pets</h1>
                <p className='text-gray-600'>Essential advice to keep your furry friends safe and comfortable this winter</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {tips.map(tip => (
                    <div key={tip.tipId} className="card bg-base-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="card-body">
                            <div className='text-5xl mb-3 text-center'>
                                {tip.icon}
                            </div>
                            <h2 className="card-title text-lg justify-center text-center">
                                {tip.title}
                            </h2>
                            <p className='text-sm text-gray-600 text-center'>
                                {tip.description}
                            </p>
                            <div className='flex justify-center gap-2 mt-4'>
                                <div className='badge badge-outline badge-sm'>
                                    {tip.category}
                                </div>
                                <div className={`badge badge-sm ${getDifficultyColor(tip.difficulty)}`}>
                                    {tip.difficulty}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='text-center mt-10'>
                <button className='btn btn-primary'>Download Complete Winter Care Guide</button>
            </div>
        </div>
    );
};

export default WinterCareTips;