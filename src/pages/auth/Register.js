// src/pages/auth/Register.js
import '../../styles/Auth.css';  // или путь до твоего CSS-файла
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ login: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const res = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Регистрация успешна! Сейчас перенаправляем на вход...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(data.message || 'Ошибка регистрации');
      }
    } catch (err) {
      setError('Сервер не запущен');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Регистрация администратора</h2>

        {message && <p style={{color: 'green', background: '#f0fff0', padding: '10px', borderRadius: '8px'}}>{message}</p>}
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Логин"
            value={form.login}
            onChange={(e) => setForm({...form, login: e.target.value})}
            required
            minLength="3"
          />
          <input
            type="password"
            placeholder="Пароль"
            value={form.password}
            onChange={(e) => setForm({...form, password: e.target.value})}
            required
            minLength="5"
          />
          <button type="submit">Зарегистрироваться</button>
        </form>

        <p style={{marginTop: '20px'}}>
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </p>
      </div>
    </div>
  );
}