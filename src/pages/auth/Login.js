
import '../../styles/Auth.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {

  const [form, setForm] = useState({ login: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('accessToken', data.accessToken);
        navigate('/admin');
      } else {
        setError(data.message || 'Неверный логин или пароль');
      }
    } catch (err) {
      setError('Сервер не отвечает. Запусти бэкенд!');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Вход администратора</h2>
        {error && <p className="error">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Логин"
            value={form.login}
            onChange={(e) => setForm({...form, login: e.target.value})}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={form.password}
            onChange={(e) => setForm({...form, password: e.target.value})}
            required
          />
          <button type="submit">Войти</button>
        </form>

        <p style={{marginTop: '20px'}}>
          Нет аккаунта? <Link to="/register">Регистрация</Link>
        </p>
      </div>
    </div>
  );
}