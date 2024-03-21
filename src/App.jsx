import Home from './pages/home';
import SignIn from './pages/sign-in';
import User from './pages/user';
import './styles/main.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </Router>
    );
}

export default App;
