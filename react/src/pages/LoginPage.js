import { useState } from 'react';
import './LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (email && password) {
      console.log('Authentification...');
    }
  };

  const handleFocus = (field) => {
    setTouched((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div className="login-wrapper">
      <p className="app-name">Micoz</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Bienvenue.</h1>
        <input
          type="email"
          placeholder="adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => handleFocus('email')}
          className={`login-input ${touched.email && !email ? 'error' : ''}`}
        />
        <input
          type="password"
          placeholder="mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => handleFocus('password')}
          className={`login-input ${touched.password && !password ? 'error' : ''}`}
        />
        <button type="submit" className="login-button">Connexion</button>
      </form>
    </div>
  );
}
