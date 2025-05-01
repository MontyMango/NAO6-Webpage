import React, { useState } from "react";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log("Logged in with", username, password);
  };

  return (
    <div className="login-page">
      <h1>Log In</h1>
      {/* Login Form */}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>


    <div className="learn-more-container">
      <h1>Learn More About Our NAO6 Robot Project</h1>

      <section>
        <h2>Abstract</h2>
        <p>
          This report outlines the latest developments in the integration of large
          language models (LLMs) with the NAO6 humanoid robot. We describe our system
          architecture, security enhancements, deployment strategies, and new features
          implemented since our last report. A transition from RHEL7 to RHEL9 is detailed,
          along with the decision to continue using Docker over Podman due to compatibility
          and performance considerations. Additionally, we introduce a web-based front-end
          for user interaction.
        </p>
        <p>
          <strong>Index Terms:</strong> NAO6, humanoid robot, LLM, Ollama, Docker.
        </p>
      </section>

      <section>
        <h2>Introduction</h2>
        <p>
          With the increasing capabilities of large language models, integrating them with
          humanoid robots presents opportunities for enhanced human-robot interaction. Our
          project focuses on embedding LLM-based conversational intelligence into the NAO6 robot,
          leveraging a backend infrastructure based on Docker containers.
        </p>
      </section>

      <section>
        <h2>Previous Work and New Features</h2>
        <p>
          In our last report, we detailed the initial deployment of our system on CS03,
          consisting of a backend running on a Flask API, an Ollama container providing LLM
          interactions, and a MySQL database for logging interactions. Since then, we have enhanced
          system security, optimized performance, and introduced new features such as:
        </p>
        <ul>
          <li>API key-based authentication</li>
          <li>SSL encryption</li>
          <li>A web-based user interface for better interaction</li>
        </ul>
      </section>

      <section>
        <h2>LLM Performance Evaluation</h2>
        <p>
          We compared the performance of three distinct models from the OLLAMA API:
          <strong>Deep-seek</strong>, <strong>Qwen</strong>, and <strong>LLAMA 3</strong>.
        </p>
        <h3>Deep-seek</h3>
        <p>
          Excels at reasoning and logical tasks but has long response times (up to 1 minute on CPU).
        </p>
        <h3>Qwen</h3>
        <p>
          Specializes in answering scientific queries but lacks personality for engaging interactions.
        </p>
        <h3>LLAMA 3</h3>
        <p>
          A well-rounded model that performs a wide variety of tasks with high responsiveness to prompt engineering.
        </p>
      </section>

      <section>
        <h2>Security Features</h2>
        <p>
          To ensure secure communication between the NAO6 robot and the backend server, we have implemented:
        </p>
        <ul>
          <li>API Key Security: Authentication for authorized access only</li>
          <li>SSL Encryption: Secure data transmission via self-signed certificates</li>
        </ul>
      </section>

      <section>
        <h2>New Features</h2>
        <p>
          We’ve made significant improvements to enhance the system's functionality:
        </p>
        <ul>
          <li>Adaptive Recording Mechanism: Records only relevant portions of speech</li>
          <li>LLM Personality Control: Refined LLM responses to be more engaging</li>
          <li>Web Front-End: A user interface for configuring settings and viewing logs</li>
        </ul>
      </section>

      <section>
        <h2>Deployment Strategies</h2>
        <p>
          The migration to RHEL9 with GPU support has greatly improved performance, especially for LLM queries.
          We also utilized Docker over Podman, which improved GPU performance and reduced response times.
        </p>
        <h3>Private Docker Network</h3>
        <p>
          We configured a private Docker network to isolate the Ollama container from external access, improving security.
        </p>
        <h3>Migration to CS04</h3>
        <p>
          The transition to the CS04 server (RHEL9) improved system performance and allowed GPU-based LLM queries.
        </p>
      </section>

      <section>
        <h2>Future Work</h2>
        <p>
          Looking ahead, we plan to integrate more advanced LLMs, optimize prompt engineering, and expand the front-end
          interface to improve user interaction.
        </p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          The migration to CS04 and the implementation of security features has greatly advanced our project.
          The system's performance and security have been enhanced, providing a strong foundation for future growth.
        </p>
      </section>

      <section>
        <h2>Acknowledgments</h2>
        <p>
          We would like to thank the Computer Science Department of Indiana University South Bend for providing the
          NAO6 robot and the necessary infrastructure for this project.
        </p>
      </section>
    </div>



    </div>
  );
}

export default LogIn;

