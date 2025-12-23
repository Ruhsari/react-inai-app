
import React from 'react';
import './Footer.css';


import logo_1 from '../img/logo_1.png';
import facebookIcon from '../img/facebook.png';
import instagramIcon from '../img/instagram.png';
import whatsupIcon from '../img/whatsup.png';
import youtubeIcon from '../img/youtube.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Логотип слева */}
        <div className="footer-logo">
          <img src={logo_1} alt="INAI Logo" className="logo_1img" />
          <p className='inai-copyright'>INAI.KG © 2025</p>
        </div>

        {/* Два столбца справа */}
        <div className="footer-columns">
          {/* Столбец 1: Контакты */}
          <div className="footer-column">
            <h4 className="footer-title">Контакты</h4>
            <ul className="footer-list">
              <li>+996 500 549 238</li>
              <li>info@inai.kg</li>
              <li>г. Бишкек ул. Тимирязева 74. 720010</li>
            </ul>
          </div>

          {/* Столбец 2: Информация и соцсети */}
          <div className="footer-column">
            <h4 className="footer-title">Информация</h4>
            <ul className="footer-list">
              <li>О нас</li>
              <li>Программы</li>
              <li>Мероприятия</li>
              <li>Поступление</li>
            </ul>

            {/* Соцсети */}
            <div className="social-links">
              <a href="#" className="social-link">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" className="social-link">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#" className="social-link">
                <img src={whatsupIcon} alt="Whatsup" />
              </a>
              <a href="#" className="social-link">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя полоса с копирайтом */}
      <div className="footer-bottom">
        <p>&copy; 2025 Кыргызско-Германский институт прикладной информатики. Все права защищены.</p>
      </div>
    </footer>
  );
}