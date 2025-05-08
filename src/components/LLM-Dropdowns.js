import React from "react";
import axios from "axios";

const SENDTO = "http://149.161.65.104:43016/"

const LLMDropdown = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div class="rvt-dropdown" data-rvt-dropdown="example-dropdown">
                <label for="select-input-default" class="rvt-label">The Robot's Large Language Model</label>
                <select name="llmDropdown" id="select-input-default" class="rvt-select">
                    <option value="deepseek-r1:7b">DeepSeek-R1 | 7b</option>
                    <option value="deepseek-r1:14b">DeepSeek-R1 | 14b</option>
                    <option value="gemma3:12b">Gemma 3 | 12b</option>
                    <option value="llama3.2">Llama 3.2 | 3b</option>
                    <option value="qwen2.5:14b">Qwen 2.5 | 14b</option>
                    <option value="qwen2.5:0.5b">Qwen 2.5 | 0.5b</option>
                </select>
            </div>

            <div style={{ margin: '0px 25px', paddingTop: '30px' }}>
                <button onClick={() => changeLLM()} class="rvt-button">Set LLM</button>
            </div>


        </div>
    );
}

const MoodDropdown = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div class="rvt-dropdown" data-rvt-dropdown="example-dropdown">
                <label for="select-input-default" class="rvt-label">Robot's Mood</label>
                <select name="moodDropdown" id="select-input-default" class="rvt-select">
                    <option value="neutral">Neutral</option>
                    <option value="happy">Happy</option>
                    <option value="mad">Mad</option>
                    <option value="sassy">Sassy</option>
                    <option value="sad">Sad</option>
                    <option value="talkative">Talkative</option>
                    <option value="submissive">Submissive</option>
                    <option value="dominating">Dominating</option>
                    <option value="jealous">Jealous</option>
                    <option value="nervous">Nervous</option>
                    <option value="nostalgic">Nostalgic</option>
                    <option value="dynamic">Dynamic</option>
                </select>
            </div>

            <div style={{ margin: '0px 25px', paddingTop: '30px' }}>
                <button onClick={() => changeMood()} class="rvt-button">Change Mood</button>
            </div>
        </div>
    );
}


function changeLLM() {
    // Get the value data from the llm dropdown menu
    const moodDropdown = document.getElementsByName('llmDropdown');
    const newLLM = moodDropdown[0].value;
    console.log(`changeLLM called: ${newLLM}`);

    // Send data to the backend via POST
    axios.post(SENDTO + '/set_llm', {
        model: newLLM
    })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function changeMood() {
    // Get the value data from the Mood dropdown menu
    const moodDropdown = document.getElementsByName('moodDropdown');
    const newMood = moodDropdown[0].value;
    console.log(`changeMood called: ${newMood}`);

    // Send data to the backend via POST using Axios
    axios.post(SENDTO + '/set_mood', {
        mood: newMood
    })
        .then(response => {
            console.log(response.data); // Log the response data
        })
        .catch(error => {
            console.error('Error:', error); // Log any errors
        });
}

export {
    MoodDropdown,
    LLMDropdown
}