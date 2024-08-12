import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/users">User List</Link>{' '}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<div className="card"></div>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<UserList />} />{' '}
      </Routes>
    </Router>
  );
}

export default App;
