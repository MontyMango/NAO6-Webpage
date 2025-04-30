// PATH: http://localhost:3000/chat
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/pages/mainpage'
import NAO6Chat from './components/pages/nao6-chat'


function App() {
  return (
    // Put header here
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path='/chat' element={<NAO6Chat/>} />
        
      </Routes>
    </Router>

    // Put footer here
  );
}

export default App;
