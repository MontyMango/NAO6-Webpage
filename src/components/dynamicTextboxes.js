import React, { useEffect, useState } from "react"
import axios from "axios";

const DELAYINSECONDS = 5
const SENDTO = "http://149.161.65.104:43016/"

const AutoRefreshPromptWindow = () =>   {
  // States that are used for dynamic messaging 
  const [responseData, setResponseData] = useState(null);
  const [transcriptionData, setTranscriptionData] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(SENDTO + 'response');
      console.log(response.data.transcription);
      setResponseData(response.data.transcription);

      const transcription = await axios.get(SENDTO + 'transcription');
      console.log(transcription.data.transcription);
      setTranscriptionData(transcription.data.transcription)

      setError(null)
    } 
    catch (err) {
      setError(err.message);
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      // Run the function
      fetchData();
  
      // Delay - Edit DELAYINSECONDS to change the delay time.
      const intervalId = setInterval(fetchData, DELAYINSECONDS * 1000);
  
      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
  }, [responseData, transcriptionData]); 

  // Displaying messages on the website
  if (loading) {
    return <div>Loading...</div>;
  }
  else if (error) {
    return (
      <div>
        <pre>Error: {error}</pre>
      </div>
    )
  }
  return (
    <div style={{paddingTop: `15px`}}>
        <h2 style={{textAlign: `left`}}>Response from NAO6</h2>
        <p style={{overflowX: `hidden`, overflowY: `auto`}}>{JSON.stringify(responseData, null, 2)}</p>
        <h2 style={{textAlign: `left`}}>What NAO6 heard you say:</h2>
        <p style={{overflowX: `hidden`, overflowY: `auto`}}>{JSON.stringify(transcriptionData, null, 2)}</p>
    </div>
  );
};

const DisplayModelandMood = () =>   {
    // States that are used for dynamic messaging 
    const [llmData, setllmData] = useState(null);
    const [moodData, setMoodData] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(SENDTO + 'get_llm_and_mood');
        console.log(response.data);
        setllmData(response.data.llm);
        setMoodData(response.data.mood)
        setError(null)
      } 
      catch (err) {
        setError(err.message);
      } 
      finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
        // Run the function
        fetchData();
    
        // Delay - Edit DELAYINSECONDS to change the delay time.
        const intervalId = setInterval(fetchData, DELAYINSECONDS * 1000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [moodData, llmData]); 
  
    // Displaying messages on the website
    if (loading) {
      return <div>Loading...</div>;
    }
    else if (error) {
      return (
        <div>
          <pre>Error: {error}</pre>
        </div>
      )
    }
    return (
      <div style={{paddingTop: `15px`}}>
        <div style={{overflowX: `hidden`, overflowY: `auto`}}>
          <h5>NAO6 is currently feeling:</h5>
          <pre style={{padding: `10px 10px`}}>{JSON.stringify(moodData, null, 2)}</pre>
        </div>
        <div style={{overflowX: `hidden`, overflowY: `auto`}}>
          <h5>NAO6's current LLM is:</h5>
          <pre style={{padding: `10px 10px`}}>{JSON.stringify(llmData, null, 2)}</pre>
        </div>
      </div>
    );
};

export  {
  AutoRefreshPromptWindow,
  DisplayModelandMood
}