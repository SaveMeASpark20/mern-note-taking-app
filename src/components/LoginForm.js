import React from 'react'
import { useNavigate } from 'react-router-dom';
import authStore from '../stores/authStore';

export default function LoginForm() {

  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await store.login();
    navigate("/");
  }

  return (
    <div className="login">
        <form onSubmit={ handleLogin }>
            <input onChange={store.updateLoginForm } value={ store.loginForm.email } type="email" name="email" placeholder="Username" />
            <input onChange={store.updateLoginForm }value={ store.loginForm.password } type="password" name="password" placeholder="Password" />
            <div>
              <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}
