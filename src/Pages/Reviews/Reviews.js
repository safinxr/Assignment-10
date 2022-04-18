import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="review-bg my-5 py-5">
      <h1 className="text-center text-white fw-bold mb-4">People's Review</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
            <div className="bg-white p-5 radius">
              <p>
                We all had to start somewhere, but i can tell for sure that Fit
                Boss knows exactly how to effectively learn about healthy
                lifestyle and working out. He will be there for you with his
                professional program and natritional diet plan. The results are
                amazing
              </p>
            </div>
            <div className="d-flex flex-column align-items-center position">
              <img
              width={70}
                className="rounded-circle"
                src="https://niobe.axiomthemes.com/wp-content/uploads/2016/10/1test-98x98.jpg"
                alt=""
              />
              <p className="card-text text-white text center fw-bold mb-0">Revecca Stevens</p>
              <p className="card-text text-white text center ">Tennis Player</p>
              
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
            <div className="bg-color p-5 radius">
              <p className="text-white">
                I love your hard work and the devotion to every trainee. The results were almost immediate really, if you know that your trainer is a professional you can become a completely different self within months. Think positive eat good and start working out with Fit boss.
              </p>
            </div>
            <div className="d-flex flex-column align-items-center position">
              <img
              width={70}
                className="rounded-circle"
                src="https://niobe.axiomthemes.com/wp-content/uploads/2016/09/testim-2-98x98.jpg"
                alt=""
              />
              <p className="card-text text-white text center fw-bold mb-0">Arron Keanly</p>
              <p className="card-text text-white text center ">Model</p>
              
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
            <div className="bg-white p-5 radius">
              <p>
              Fit Boss is an awesome trainer to work with: he is a positive and strong man with kind and sincere intentions to help you! If you are a beginner, he will teach you everything and will be supporting you throughout the entire journey to the body of you dream.
              </p>
            </div>
            <div className="d-flex flex-column align-items-center position">
              <img
              width={70}
                className="rounded-circle"
                src="https://niobe.axiomthemes.com/wp-content/uploads/2016/10/3test-98x98.jpg"
                alt=""
              />
              <p className="card-text text-white text center fw-bold mb-0">Debbie Franklin</p>
              <p className="card-text text-white text center ">Designer</p>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Reviews;
