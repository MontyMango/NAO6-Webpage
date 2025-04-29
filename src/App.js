import logo from './logo.svg';
import Main from './components/main';
import { LLMDropdown, MoodDropdown } from './components/LLM-Dropdowns';
import { Textarea } from './components/Textboxes';
import { AutoRefreshPromptWindow, DisplayModelandMood } from './components/dynamicTextboxes';

function App() {
  return (
    // Put header here

    <div>
      <div class="rvt-bg-black-000 rvt-border-bottom rvt-p-top-xl">
        <div class="rvt-container-lg rvt-prose rvt-flow rvt-p-bottom-xl">
          <h1 class="rvt-m-top-xs">Send messages to NAO6</h1>
        </div>
      </div>

      <div class="rvt-layout__wrapper [ rvt-p-tb-xxl ]">
        <div class="rvt-container-lg">
          <div class="rvt-row">
            <div class="rvt-cols-8-md rvt-flow rvt-prose">
              <div class="rvt-prose rvt-flow">
                <div className="App">
                  <h1>Responses and Transcriptions</h1>
                  <p>This is where you can read the response from NAO6 and read what NAO6 thought you said</p>
                  <AutoRefreshPromptWindow />
                  <Textarea />

                  <h1 style={{ marginTop: '50px' }}>Robot Settings</h1>
                  <p>This is where you can see NAO6's status</p>
                  <DisplayModelandMood />
                  
                  <h1 style={{ marginTop: '50px' }}>Robot Settings</h1>
                  <p>This is where you can change the settings for the robot </p>

                  <div style={{ margin: '0px 0px 15px 0px' }}>
                    <LLMDropdown />
                  </div>
                  <div style={{ margin: '20px 0px' }}>
                    <MoodDropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // Put footer here
  );
}

export default App;
