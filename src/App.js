// PATH: http://localhost:3000/chat
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/pages/mainpage'
import NAO6Chat from './components/pages/nao6-chat'
import LogIn from './components/pages/LogIn';
import AboutProject from './components/pages/AboutProject';
import Team from './components/pages/Team';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    // Put header here
    <Router>
      <div className="App">
        <Header />
          <Routes>
          {/* Main Page */}
          <Route path="/" element={<Main/>} />
          {/* NAO6 Chat Page */}
          <Route path='/chat' element={<NAO6Chat/>} />
          {/* Log In Page */}
          <Route path="/login" element={<LogIn />} />
          {/* About the Project Page */}
          <Route path="/about-project" element={<AboutProject />} />
          {/* Meet the Team Page */}
          <Route path="/team" element={<Team />} />
          {/* Contact Us is now a direct hyperlink */}
          </Routes>
          
          <Footer />
        </div>
    </Router>

    // Put footer here
  );
}

export default App;
