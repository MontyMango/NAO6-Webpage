import React from 'react';
import helpIllustration from '../assets/helpIllustration.png';

const HelpPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="help-popup-overlay">
      <div className="help-popup">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Help chatting with NAO6</h2>
        <p>Here's an illustration on how to talk to NAO6</p>
        <img src={helpIllustration} alt='An image of the NAO6 robot with the text: saying talk into my ear (less than 6 feet), I can tolerate some noise. '/>
      </div>
    </div>
  );
};

export{
  HelpPopup
}