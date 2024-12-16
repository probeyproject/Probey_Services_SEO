import React from "react";

function GridBlock() {
    return (
        
            <section className="container h-100">
                <h2 className="display-4">Scale your business, Unlimited.

                </h2>
                <p className='mb-4'>Plan, Pay, Publish, Promote, Perform!
                </p>
            
            <div className="container h-100">
                <div className="row h-100">
                    {/* Left Column with images */}
                    <div className="col-md-4">
                        <div className="mb-3 image-container h-50 rounded-3 position-relative">
                            <img
                                src="https://cdn.prod.website-files.com/660909758b913bba4220c458/66fe31d4761af995712d7b3e_ai-revenue-cycle-operations-dashboard-p-500.jpg"
                                className="img-fluid py-1 rounded-3 image-hover h-100"
                                alt="Revenue Cycle Operations"
                            />
                            {/* Title and Description for the first image */}
                            <div className="text-overlay">
                                <h5 className="text-white">Revenue Cycle Operations</h5>
                                <p className="text-white">Optimizing revenue cycle management through AI-powered solutions.</p>
                            </div>
                        </div>
                        <div className="mb-3 image-container h-50 rounded-3 position-relative">
                            <img
                                src="https://cdn.prod.website-files.com/660909758b913bba4220c458/66fe31d4761af995712d7b3e_ai-revenue-cycle-operations-dashboard-p-500.jpg"
                                className="img-fluid py-1 rounded-3 image-hover h-100"
                                alt="Revenue Cycle Operations"
                            />
                            {/* Title and Description for the second image */}
                            <div className="text-overlay">
                                <h5 className="text-white">Revenue Cycle Operations</h5>
                                <p className="text-white">AI-driven insights to improve operational efficiency and reduce costs.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column with larger image and smaller images */}
                    <div className="col-md-8">
                        <div className="big-img mb-3 image-container rounded-3 position-relative">
                            <img
                                src="https://cdn.prod.website-files.com/660909758b913bba4220c458/668bb2bd43c63ba6c3d62f55_small%20business%20automation-p-1080.jpg"
                                className="img-fluid rounded-3 image-hover"
                                alt="Business Automation"
                            />
                            {/* Title and Description for the big image */}
                            <div className="text-overlay">
                                <h5 className="text-white">Business Automation</h5>
                                <p className="text-white">Streamlining business processes through intelligent automation tools.</p>
                            </div>
                        </div>
                        <div className="two-img">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="image-container rounded-3 position-relative">
                                        <img
                                            src="https://cdn.prod.website-files.com/660909758b913bba4220c458/66fe31d4761af995712d7b3e_ai-revenue-cycle-operations-dashboard-p-500.jpg"
                                            className="img-fluid rounded-3 image-hover"
                                            alt="Revenue Cycle Operations"
                                        />
                                        {/* Title and Description for the first smaller image */}
                                        <div className="text-overlay">
                                            <h5 className="text-white">Revenue Cycle Insights</h5>
                                            <p className="text-white">Gain deeper insights into the revenue cycle through analytics.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image-container rounded-3 position-relative">
                                        <img
                                            src="https://cdn.prod.website-files.com/660909758b913bba4220c458/66fe31d4761af995712d7b3e_ai-revenue-cycle-operations-dashboard-p-500.jpg"
                                            className="img-fluid rounded-3 image-hover"
                                            alt="Revenue Cycle Operations"
                                        />
                                        {/* Title and Description for the second smaller image */}
                                        <div className="text-overlay">
                                            <h5 className="text-white">AI-Driven Operations</h5>
                                            <p className="text-white">Enhancing operational efficiency with artificial intelligence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
  );
}

export default GridBlock;