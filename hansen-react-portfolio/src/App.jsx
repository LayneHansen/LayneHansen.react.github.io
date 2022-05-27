import './App.css';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import Projects from './Projects';
import Contact from './Contact';
import Profile from './Profile'; 

function App() {
  return (
    <div className="App">
      <h1>new portfolio</h1>

    <Router>
      <Routes>
        <Route path="/" component={Homepage} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/profile" component={Profile} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
