const services = [
    {
        icon: "🌿",
        title: "Landscaping",
        description: "Transform your outdoor space with custom designs, stone pathways, garden beds, and natural elements tailored to your property."
    },
    {
        icon: "✂️",
        title: "Pruning Plants",
        description: "Maintain plant health and aesthetics by trimming overgrowth, removing dead branches, and shaping trees and shrubs professionally."
    },
    {
        icon: "🧺",
        title: "Lawn Maintenance",
        description: "Ensure a lush, green lawn year-round with mowing, edging, fertilizing, weed control, and seasonal cleanup services."
    },
    {
        icon: "💧",
        title: "Irrigation & Drainage",
        description: "Install and maintain efficient irrigation systems and drainage solutions to keep your landscape healthy and water-efficient."
    }
];

const Landscaping = () => {
    return (
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-green-600 text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Landscaping;
