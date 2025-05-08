import React from "react";
// import { Textarea } from '../Textboxes';
import { AutoRefreshPromptWindow, DisplayModelandMood } from '../dynamicTextboxes';
import { LLMDropdown, MoodDropdown } from '../LLM-Dropdowns';
// import { HelpPopup } from '../Help';
import helpIllustration from '../../assets/helpIllustration.png'


const NAO6Chat = () => {
  // const [isHelpOpen, setIsHelpOpen] = useState(false);

  // const openHelp = () => setIsHelpOpen(true);
  // const closeHelp = () => setIsHelpOpen(false);
  
  return (
    <div>
        <div class="rvt-bg-black-000 rvt-border-bottom rvt-p-top-xl">
          <div class="rvt-container-lg rvt-prose rvt-flow rvt-p-bottom-xl">
            <h1 class="rvt-m-top-xs">NAO6 Chat</h1>
            </div>
          </div>
    
          <div class="rvt-layout__wrapper [ rvt-p-tb-xxl ]">
            <div class="rvt-container-lg">
              <div class="rvt-row">
                <div class="rvt-cols-8-md rvt-flow rvt-prose">
                  <div class="rvt-prose rvt-flow">
                    <div className="App">
                      <h1 style={{marginTop: '0px'}}>Responses and Transcriptions</h1>
                      <p>This is where you can read the response from NAO6 and read what NAO6 thought you said</p>
                      <AutoRefreshPromptWindow />
                      {/* <Textarea /> */}
    
                      <h1 style={{ paddingTop: '20px' }}>NAO6's Statuses</h1>
                      <p>This is where you can see NAO6's status</p>
                      <DisplayModelandMood />
                      
                      <h1 style={{ paddingTop: '20px' }}>NAO6's Settings</h1>
                      <p>This is where you can change the settings for the robot </p>
    
                      <div style={{  paddingBottom: '15px' }}>
                        <LLMDropdown />
                      </div>
                      <div style={{ paddingBottom: '15px'}}>
                        <MoodDropdown />
                      </div>

                      
                      <div style={{ marginTop: '50px' }}>
                        <h1>Help Illustration</h1>
                        <p style={{ padding: '0px 0px 20px 0px'}}>If you need help understanding how to control NAO6, here's the section to be!</p>
                        <img src={helpIllustration} alt='A NAO6 robot with the text: saying talk into my ear (less than 6 feet), I can tolerate some noise. '/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default NAO6Chat;
