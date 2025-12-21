
import React from 'react';
import './EventsAndLife.css';
import { Link } from 'react-router-dom';

import ev1 from '../img/ev1.png';
import ev2 from '../img/ev2.png';
import ev3 from '../img/ev3.png';
import ev4 from '../img/ev4.png';

const events = [
  {
    id: 1,
    title: 'Внутреинститутский и межинститутский Хакатон',
    description: 'Готовы бросить вызов своим идеям и навыкам? Тогда наш хакатон — именно для вас! Это событие объединяет студентов разных направлений и институтов, чтобы вместе создавать инновационные проекты, решать реальные задачи и показать силу командной работы. Хакатон',
    image: ev1,
  },
  {
    id: 2,
    title: 'День открытых дверей в INAI!',
    description: 'Хочешь узнать, как проходит студенческая жизнь, какие направления обучения мы предлагаем и какие возможности ждут тебя после поступления? Приходи на День открытых дверей!',
    image: ev2,
  },
  {
    id: 3,
    title: 'Наши студенты на KIT Форуме и KIT EXPO!',
    description: 'Студенты нашего института приняли активное участие в KIT Форуме — не только как волонтёры, но и как спикеры, делясь своими знаниями и опытом с участниками! Кроме того, команда студентов достойно представила институт на выставке KIT EXPO, демонстрируя инновационные проекты, достижения и современные идеи. ',
    image: ev3,
  },
  {
    id: 4,
    title: 'Благотворительная ярмарка в поддержку детского дома',
    description: 'С 21 по 23 октября на территории КГИПИ прошла благотворительная ярмарка еды, средства от которой были направлены на помощь Беловодскому детскому дому.',
    image: ev4,
  },

];

export default function EventsAndLife() {
  return (
    <section className="events-and-life">
      <div className="events-container">
        <h2 className="events-title">Мероприятия Института</h2>
        <p className="events-subtitle">и студенческая жизнь</p>

        {/* НОВЫЕ КНОПКИ-ФИЛЬТРЫ */}
        <div className="events-filters">
          <button className="filter-btn active">Хакатоны</button>
          <button className="filter-btn">Конференции</button>
          <button className="filter-btn">Праздники</button>
          <Link to="/clubs" className="filter-btn">Клубы</Link>
        </div>

        <div className="events-list">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`event-card-full ${index % 2 === 1 ? 'reversed' : ''}`}
            >
              <div className="event-image-full">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-content-full">
                <h3 className="event-card-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-button-wrapper">
                  <button className="event-learn-more-btn">
                    <span className="arrow">→</span>
                  </button>
                  <span className="event-button-text">Узнать больше</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}