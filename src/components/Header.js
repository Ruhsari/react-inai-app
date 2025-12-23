// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Header() {
  return (
    <header>
      {/* Синий верхний хедер */}
      <div className="header">
        <span className="number">+996 500 549 238</span>
        <span className="email">info@inai.kg</span>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Вход</Link>
          <Link to="/register" className="register-btn">Регистрация</Link>
        </div>

        <span className="search">Поиск...</span>
      </div>

      {/* Белая навигация */}
      <div className="nav-bar">
        <img src={logo} alt="INAI UNI" className="nav-logo" />

        <ul className="nav">
          <li><Link to="/">Главная</Link></li>

          {/* О нас */}
          <li className="dropdown">
            <span>О нас</span>
            <ul className="dropdown-menu">
              <li><Link to="/about/About">О нас</Link></li>
              <li><Link to="/about/OrgChart">Органограмма</Link></li>
              <li><Link to="/about/documents">Нормативные документы</Link></li>
              <li><Link to="/about/cooperation">Международное сотрудничество</Link></li>
              <li><Link to="/about/conference">Сайт IT конференции</Link></li>
            </ul>
          </li>

          {/* Абитуриентам */}
          <li className="dropdown">
            <span>Абитуриентам</span>
            <ul className="dropdown-menu">
              <li><Link to="/applicants/programs">Программы</Link></li>
              <li><Link to="/applicants/admissionrules">Правила приема студентов </Link></li>
              <li><Link to="/applicants/scholarships">Стипендии</Link></li>
            </ul>
          </li>

          {/* Студентом */}
          <li className="dropdown">
            <span>Студентом</span>
            <ul className="dropdown-menu">
              <li><Link to="/students/learningprocess">Учебный процесс</Link></li>
              <li><Link to="/students/schedule">Расписание</Link></li>
              <li><Link to="/students/studentratings">Рейтинг студентов</Link></li>
              <li><Link to="/students/curriculum">Учебный план</Link></li>
              <li><Link to="/students/studentslife">Студенческая жизнь</Link></li>
            </ul>
          </li>

          {/* Выпускникам */}
          <li className="dropdown">
            <span>Выпускникам</span>
            <ul className="dropdown-menu">
              <li><Link to="/alumni/success">Истории успеха</Link></li>
              <li><Link to="/alumni/events">Мероприятия</Link></li>
              <li><Link to="/alumni/alumniAssociation">Ассоциация выпускников</Link></li>
              <li><Link to="/alumni/documentsOfTheAssociation">Нормативные документы Ассоциации</Link></li>
              <li><Link to="/alumni/vacancies">Вакансии</Link></li>
            
            </ul>
          </li>

          {/* Контакты */}
          <li><Link to="/contscts">Контакты</Link></li>  
        </ul>
      </div>
    </header>
  );
}