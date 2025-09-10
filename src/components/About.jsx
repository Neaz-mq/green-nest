const About = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-10 bg-white">
            {/* Left Side - Image with overlay */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
                {/* Main Image */}
                <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden">
                    <img
                        src="https://res.cloudinary.com/dxohwanal/image/upload/v1757489734/the-girl-in-the-glasses_xmftxv.jpg"
                        alt="Gardener"
                        className="w-full h-full object-cover"
                    />
                    {/* Circle overlay */}
                    <div className="absolute -top-8 -right-8 w-20 h-20 border-8 border-green-600 rounded-full z-0 hidden sm:block"></div>
                    {/* Experience Badge */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-green-600 text-white px-5 py-2 rounded shadow-lg text-sm font-semibold flex items-center gap-2">
                        <span className="text-2xl font-bold">20</span>
                        <div className="leading-tight">
                            Years Of <br /> experience
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Text */}
            <div className="w-full lg:w-1/2">
                <p className="text-green-600 text-sm font-semibold tracking-widest uppercase mb-2">About Us</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    The Best Choice For <br /> your Business.
                </h2>
                <p className="text-gray-600 mb-4">
                    With over two decades of experience in landscaping and garden care, we bring a deep understanding of natural beauty and outdoor functionality. 
                </p>
                <p className="text-gray-600 mb-6">
                    Our team ensures every garden is tailored to your lifestyle — whether you're seeking tranquility, productivity, or visual impact.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-start gap-4">
                        <div className="text-green-600 text-3xl">
                            ⚙️
                        </div>
                        <div>
                            <h4 className="text-md font-semibold text-gray-900">Expert Designers</h4>
                            <p className="text-gray-600 text-sm">Our creative professionals design custom landscapes that reflect your vision.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="text-green-600 text-3xl">
                            💻
                        </div>
                        <div>
                            <h4 className="text-md font-semibold text-gray-900">Modern Tools</h4>
                            <p className="text-gray-600 text-sm">We use advanced tech and sustainable practices for quality and efficiency.</p>
                        </div>
                    </div>
                </div>

                {/* Box image and CTA */}
                <div className="flex items-center gap-4 flex-wrap">
                    <img src="/box.jpeg" alt="Box of flowers" className="w-28 h-28 object-cover rounded-md" />
                    <button className="bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition duration-300">
                        Get A Quote
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
