import { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LogInForm from '../../components/LogInForm/LogInForm'
import Logo from '../../assets/Logo/logo.png';


export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main>
            <img src={Logo} alt="logo" style={{ width: '100px', height: '100px', margin: '10px 20px' }} />
            {showLogin ? <LogInForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            <br/>
            <div>
                
                <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? "Don't have an account? Sign Up" : 'Already have an account? Log in'}</h3>
            </div>
        </main>
    )
}