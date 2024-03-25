import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import SignIn from './pages/sign-in';
import User from './pages/user';
import './styles/main.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

/**
 * Composant App
 * @description Le composant principal de l'application, définissant les routes et la structure globale.
 */
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/user" element={<User />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
