import React from 'react';

const Blog = () => {
    return (
        <div className='container my-5 shadow-lg py-5'>
            <h1 className='mb-4 text-center text-primary'>Most common questions?</h1>
            <div className="accordion accordion-flush " id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Difference between authorization and authentication ?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Why am i using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Firebase helps me build and run successful apps. Backed by Google, loved by developers. Accelerate app development with fully managed backend infrastructure. Here are some other popular ones other then firebase .. Passport. ...
                            Okta. ...
                            Firebase. ...
                            JSON Web Token. ...
                            Amazon Cognito. ...
                            Keycloak.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        What other services does firebase provide other than authentication?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Firebase services :<br/>
                        1: Cloud Firestore <br/>
                        2: Cloud Functions <br/>
                        3: Cloud Messaging  <br/>
                        4: Cloud Storage  <br/>
                        5: Realtime Database <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;