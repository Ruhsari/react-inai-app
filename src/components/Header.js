import logo from '../img/logo.png'
import photo_1 from '../img/blok_1_1.jpg'
import photo_2 from '../img/blok_1_2.jpg'
import React, { useEffect } from 'react';
import Reasons from './Reasons';


export default function Header() {

  useEffect(() => {
  const counters = document.querySelectorAll('.num');
  const speed = 97; // чем меньше — тем быстрее

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 20);
      } else {
        // Формат: 10K, 55K
        if (target >= 1000) {
          counter.innerText = (target / 1000).toFixed(0) + 'K';
        } else {
          counter.innerText = target;
        }
      }
    };
    updateCount();
  });
}, []);



  return (
    <header>

        <div className='header'>
            <span className= 'number'> +996 500 549 238</span>
            <span className= 'email'> info@inai.kg</span>
            <span className= 'search'> Поиск...</span>
        </div>

        <div className='nav-bar'>
          <img src={logo} alt="INAI UNI" className="nav-logo" />
          <ul className='nav'>
            <li>Главная</li>
            <li>О нас</li>
            <li>Абитуриентам</li>
            <li>Студентом</li>
            <li>Выпускникам</li>
            <li>Контакты</li>
          </ul>
        </div>
    </header>
  )
}


