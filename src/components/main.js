import React from 'react';

const Main = () => {
  return (
    <main style={{ padding: '20px', textAlign: 'center' }}>
      <div class="rvt-hero">
        <div class="rvt-container-lg">
          <div class="rvt-hero__inner">
            <div class="rvt-hero__body [ rvt-flow ]">
              <label for="search" class="rvt-label rvt-sr-only">Search</label>
              <span class="rvt-hero__eyebrow">Category</span>
              <h1 class="rvt-hero__title">NAO6 Robot</h1>
              <div class="rvt-hero__teaser">
                <p>Check out this chatbot built with NAO6 robot and LLMs.</p>
              </div>
              <div class="rvt-hero__actions">
                <a class="rvt-cta rvt-cta--button" href="#0">Learn More</a>
              </div>
            </div>
            <div class="rvt-hero__media">
              <img src="images/nao-6-humanoid-robot-img1.webp" alt="A picture of NAO6 robot" />
              <div class="rvt-hero__media-caption">An optional image caption</div>
            </div>
          </div>
        </div>
      </div>
      <p>Welcome to my React app! This is the body section.</p>
    </main>
  );
};

export default Main;
