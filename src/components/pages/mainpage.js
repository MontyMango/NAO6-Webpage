import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Main.css'; // Assuming you will have a separate CSS file for styles
import nao6Image from '../../assets/nao-6-humanoid-robot-img1.webp';

const Main = () => {
  const navigate = useNavigate();

  return (
    <main className="main-container">
      <div className="rvt-hero">
        <div className="rvt-container-lg">
          <div className="rvt-hero__inner">
            <div className="rvt-hero__body [ rvt-flow ]">
              <span className="rvt-hero__eyebrow">Capstone</span>
              <h1 className="rvt-hero__title">NAO6 Robot</h1>
              <div className="rvt-hero__teaser">
                <p>Take a look at this impressive chatbot powered by the NAO6 robot and advanced large language models.</p>
              </div>
              <div className="rvt-hero__actions">
                <a className="rvt-cta rvt-cta--button" onClick={() => navigate("/about-project")}>Learn More</a>
                <a className="rvt-cta rvt-cta--button" onClick={() => navigate("/chat")}>Chat with NAO6</a>
              </div>
            </div>
            <div className="rvt-hero__media">
              {/* Corrected the src path */}
              <img src={nao6Image} alt="A picture of NAO6 robot" />
              <div className="rvt-hero__media-caption">
                "Hello! I'm the NAO6 robot here at Indiana University South Bend. I'm here to help make your campus experience easier and more enjoyable. If you have any questions—especially about the Computer Science department—feel free to ask me anything!"
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
