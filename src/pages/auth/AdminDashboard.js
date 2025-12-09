// src/pages/auth/AdminDashboard.jsx
import '../../styles/Auth.css';  // или путь до твоего CSS-файла
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState('');

  // Проверяем accessToken при загрузке
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      navigate('/login');
      return;
    }

    // Попробуем расшифровать токен (без запроса к серверу)
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      setUserLogin(payload.login);
    } catch (err) {
      localStorage.removeItem('accessToken');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = async () => {
    await fetch('http://localhost:4000/api/logout', {
      method: 'POST',
      credentials: 'include',
    });
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Панель администратора</h1>
        <div>
          <span>Вы вошли как: <strong>{userLogin || 'admin'}</strong></span>
          <button onClick={handleLogout} className="logout-btn">Выйти</button>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dash-card">
          <h3>Заявки</h3>
          <p>Новых: 12</p>
          <button className="dash-btn">Смотреть</button>
        </div>
        <div className="dash-card">
          <h3>Студенты</h3>
          <p>Всего: 487</p>
          <button className="dash-btn">Список</button>
        </div>
        <div className="dash-card">
          <h3>Контент</h3>
          <p>Слайдер, новости, фото</p>
          <button className="dash-btn">Редактировать</button>
        </div>
      </div>
    </div>
  );
}