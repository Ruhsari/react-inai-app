// src/components/Header.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const headerRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Закрываем меню при клике вне хедера
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header ref={headerRef}>
      <div className="header">
        <span className="number">+996 500 549 238</span>
        <span className="email">info@inai.kg</span>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Вход</Link>
          <Link to="/register" className="register-btn">Регистрация</Link>
        </div>

        <span className="search">Поиск...</span>
      </div>

      <div className="nav-bar">
        <img src={logo} alt="INAI UNI" className="nav-logo" />

        <ul className="nav">
          <li><Link to="/">Главная</Link></li>

          {/* О нас */}
          <li className="dropdown">
            <span onClick={() => toggleMenu('about')}>О нас</span>
            {openMenu === 'about' && (
              <ul className="dropdown-menu">
                <li><Link to="/about/aboutus">О нас</Link></li>
                <li><Link to="/about/orgchart">Органограмма</Link></li>
                <li><Link to="/about/documents">Нормативные документы</Link></li>
                <li><Link to="/about/cooperation">Международное сотрудничество</Link></li>
                <li><Link to="/about/conference">Сайт IT конференции</Link></li>
              </ul>
            )}
          </li>

          {/* Абитуриентам */}
          <li className="dropdown">
            <span onClick={() => toggleMenu('applicants')}>Абитуриентам</span>
            {openMenu === 'applicants' && (
              <ul className="dropdown-menu">
                <li><Link to="/applicants/admission">Поступление</Link></li>
                <li><Link to="/applicants/programs">Программы</Link></li>
                <li><Link to="/applicants/scholarships">Стипендии</Link></li>
                <li><Link to="/applicants/faq">FAQ</Link></li>
              </ul>
            )}
          </li>

          {/* Студентом */}
          <li className="dropdown">
            <span onClick={() => toggleMenu('students')}>Студентом</span>
            {openMenu === 'students' && (
              <ul className="dropdown-menu">
                <li><Link to="/students/schedule">Расписание</Link></li>
                <li><Link to="/students/resources">Ресурсы</Link></li>
                <li><Link to="/students/clubs">Клубы</Link></li>
                <li><Link to="/students/support">Поддержка</Link></li>
              </ul>
            )}
          </li>

          {/* Выпускникам */}
          <li className="dropdown">
            <span onClick={() => toggleMenu('alumni')}>Выпускникам</span>
            {openMenu === 'alumni' && (
              <ul className="dropdown-menu">
                <li><Link to="/alumni/success">Истории успеха</Link></li>
                <li><Link to="/alumni/jobs">Вакансии</Link></li>
                <li><Link to="/alumni/network">Сеть выпускников</Link></li>
              </ul>
            )}
          </li>

          {/* Контакты */}
          <li className="dropdown">
            <span onClick={() => toggleMenu('contacts')}>Контакты</span>
            {openMenu === 'contacts' && (
              <ul className="dropdown-menu">
                <li><Link to="/contacts/address">Адрес и карта</Link></li>
                <li><Link to="/contacts/team">Команда</Link></li>
                <li><Link to="/contacts/feedback">Обратная связь</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}