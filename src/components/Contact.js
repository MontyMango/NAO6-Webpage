import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css'; // Assuming you will have a separate CSS file for styles

const Main = () => {
  const navigate = useNavigate();

  return (
    <main className="main-container">



<div class="rvt-hero">
        <div class="rvt-container-lg">
            <div class="rvt-hero__inner">
                <div class="rvt-hero__body [ rvt-flow ]">
                    <span class="rvt-hero__eyebrow">Category</span>
                    <h1 class="rvt-hero__title">NAO6 Robot</h1>
                    <div class="rvt-hero__teaser">
                        <p>Check out this chatbot built with NAO6 robot and LLMs.</p>
                    </div>
                    <div class="rvt-hero__actions">
                        <a class="rvt-cta rvt-cta--button" onClick={() => navigate("/login")}>Learn More</a>
                    </div>
                </div>
                <div class="rvt-hero__media">
                    <img src="images/nao-6-humanoid-robot-img1.webp" alt="A picture of NAO6 robot"/>
                    <div class="rvt-hero__media-caption">An optional image caption</div>
                </div>
            </div>
        </div>
      </div>
      <p>Welcome to my React app! This is the body section.</p>
      <div class="rvt-dropdown" data-rvt-dropdown="example-dropdown">
        <button type="button" class="rvt-button" data-rvt-dropdown-toggle>
          <span class="rvt-dropdown__toggle-text">Dropdown menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">  <path d="m15.146 6.263-1.292-1.526L8 9.69 2.146 4.737.854 6.263 8 12.31l7.146-6.047Z"/></svg>
        </button>
        <div class="rvt-dropdown__menu" data-rvt-dropdown-menu hidden>
          <a href="#">Item one</a>
          <a href="#" aria-current="page">Item two</a>
          <a href="#">Item three</a>
        </div>
      </div>      












<section className="about-project">
      <div className="container">


<h2>About the Project</h2>
        <p>
          This project aims to integrate large language models (LLMs) with the NAO6 humanoid robot, creating an intelligent and interactive system that enhances human-robot communication. By embedding advanced conversational AI into the robot, the goal is to enable seamless, natural interactions between humans and machines. Leveraging technologies like Docker containers for secure and scalable deployment, and utilizing state-of-the-art machine learning models, this project explores the potential of artificial intelligence in robotics.
        </p>

        <p>
          The NAO6 robot is equipped with sophisticated sensors, allowing it to interact with its environment and users. This project enhances the robot’s ability to understand and generate human-like speech, enabling it to respond contextually and intelligently to user input. The backend infrastructure, built using Docker, ensures smooth operation of the LLMs, and security enhancements like SSL encryption and API key-based authentication ensure that data exchange is secure and protected.
        </p>

        <h3>Key Features and Innovations</h3>
        <ul>
          <li><strong>Human-Robot Interaction</strong>: The NAO6 robot now has conversational abilities powered by cutting-edge LLMs. This allows the robot to engage in meaningful dialogues with users, responding to questions, performing tasks, and providing assistance in real-time.</li>
          <li><strong>Advanced LLMs</strong>: The project utilizes various LLMs such as Deep-seek, Qwen, and LLAMA 3, each with distinct strengths. These models enable the robot to perform complex tasks like answering scientific questions, reasoning, storytelling, and much more.</li>
          <li><strong>Security Enhancements</strong>: To ensure safe and authorized communication between the robot and the backend system, we have implemented API key-based authentication and SSL encryption. This helps prevent unauthorized access and secures sensitive data during transmission.</li>
          <li><strong>Performance Optimization</strong>: By integrating GPU support into the backend infrastructure, we significantly improved the performance of LLMs. This allows faster response times, improving the robot’s ability to process and generate speech with minimal delays.</li>
          <li><strong>Web-Based Frontend</strong>: A user-friendly web interface has been developed for system configuration, monitoring logs, and interacting with the robot’s chatbot. The interface is built to allow easy management of backend processes, providing a seamless user experience.</li>
        </ul>

        <h3>Technologies Used</h3>
        <ul>
          <li><strong>Docker</strong>: Docker containers are used to deploy the backend system and LLMs. This ensures scalability and easy management of different models running in isolated environments.</li>
          <li><strong>LLMs (Deep-seek, Qwen, LLAMA 3)</strong>: These models are the core of the project, providing the intelligence behind the robot’s speech generation and understanding. We used the OLLAMA API to access these models and compared their performance to select the most appropriate ones for various use cases.</li>
          <li><strong>SSL Encryption and API Security</strong>: To protect the integrity of data transmission, we implemented SSL encryption using a self-signed certificate. Additionally, API key-based authentication was integrated to ensure that only authorized entities can access the backend services.</li>
          <li><strong>Python and Flask</strong>: The backend services are powered by Flask, a lightweight web framework for Python. Flask handles the API requests from the robot and processes the audio-to-text conversions and LLM responses.</li>
        </ul>

        <h3>Deployment Strategy</h3>
        <p>
          Initially, the system was deployed on CS03, a server running RHEL7. However, limitations like outdated software and lack of GPU support led to the migration to CS04, which runs RHEL9. This upgrade provided GPU support, allowing for faster processing of LLM queries. The system leverages Docker for containerization, making the deployment process more streamlined and secure. We also ensured the system’s scalability and security by configuring a private Docker network to isolate sensitive containers from external access.
        </p>

        <h3>Impact and Future Directions</h3>
        <p>
          This project represents an important step forward in the application of conversational AI in robotics. By combining LLMs with the NAO6 robot, we have created a system that can engage in dynamic conversations with users, making it a valuable tool in areas such as education, healthcare, and entertainment. In the future, we plan to further enhance the robot's ability to learn from interactions, improving its conversational capabilities and adaptability. Additionally, we will explore the integration of more advanced LLMs, including models optimized for specific tasks like coding assistance or emotional interaction.
        </p>

        <p>
          The advancements made in this project lay the foundation for future AI-driven robots capable of performing complex tasks, assisting with daily activities, and engaging in meaningful social interactions. By continuing to improve the system’s capabilities, we hope to see robots like the NAO6 play an increasingly prominent role in human society, offering assistance in diverse domains and enhancing the quality of life.
        </p>



      </div>
    </section>

      <section className="technologies">
        <div className="container">
          <h2>Technologies Used</h2>
          <ul>

<li><strong>Docker</strong>: Docker containers are used to deploy the backend system and LLMs. This ensures scalability and easy management of different models running in isolated environments.</li>
          <li><strong>LLMs (Deep-seek, Qwen, LLAMA 3)</strong>: These models are the core of the project, providing the intelligence behind the robot’s speech generation and understanding. We used the OLLAMA API to access these models and compared their performance to select the most appropriate ones for various use cases.</li>
          <li><strong>SSL Encryption and API Security</strong>: To protect the integrity of data transmission, we implemented SSL encryption using a self-signed certificate. Additionally, API key-based authentication was integrated to ensure that only authorized entities can access the backend services.</li>
          <li><strong>Python and Flask</strong>: The backend services are powered by Flask, a lightweight web framework for Python. Flask handles the API requests from the robot and processes the audio-to-text conversions and LLM responses.</li>
        

            <li>Python</li>
            <li>Machine Learning (Scikit-Learn, TensorFlow)</li>
            <li>Data Visualization (Matplotlib, Seaborn)</li>
            <li>SQL & MongoDB</li>
            <li>Node.js</li>
            <li>React</li>
          </ul>
        </div>
      </section>

      <section className="footer">
        <div className="container">
          <p>© 2025 Team 1. All Rights Reserved.</p>
        </div>
      </section>
    </main>
  );
};

export default Main;
