import React from "react"

const Textarea = () => {
    return (
        <div>
            <div>
                <button onClick={() => startListening()} class="rvt-button">Start listening</button>
                <button onClick={() => stopListening()} class="rvt-button rvt-button--danger" style={{ margin: '0px 15px' }}>Stop listening</button>
            </div>
        </div>
    );
}

function startListening() {
    console.log('Start request sent to the Backend');
}

function stopListening() {
    console.log('Stop request sent to the Backend');
}

export {
    Textarea
}