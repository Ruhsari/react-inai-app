// src/components/Programs.jsx
import React from 'react';
import './Programs.css';   // убедись, что импортируешь CSS

// Импортируй свои фото (или используй эти для теста)
import programTech from '../img/program_technologies.png';
import programData from '../img/program_data.png';
import programWeb from '../img/program_web.png';
import programFinance from '../img/program_finance.png';

export default function Programs() {
  const programs = [
    {
      title: 'Program Technologies',
      image: programTech, 
    },
    {
      title: 'Data Science',
      image: programData,
    },
    {
      title: 'Web Informatics',
      image: programWeb,
    },
    {
      title: 'Financial Engineering',
      image: programFinance,
    },
  ];

  return (
    <div className="programs">
      {/* Текст слева */}
      <div className="text-programs">
        <h3>Учебные программы</h3>
        <h1>Находи свою сферу. Поступай. Интегрируйся.</h1>

        <div className="text-with-line">
          <div className="about-line"></div>
          <div className="text-block">
            <p className="about-text">
              Кыргызско-Германский институт прикладной информатики (КГИПИ) – единственный вуз в образовательном секторе Кыргызстана, специализирующийся в области компьютерных наук.
            </p>
            <button>Узнать больше о программах</button>
          </div>
        </div>
      </div>

      {/* 4 фото справа — горизонтально */}
      <div className="programs-horizontal">
        {programs.map((program, index) => (
          <div key={index} className="program-item">
            <img src={program.image} alt={program.title} />
          </div>
        ))}
      </div>
    </div>
  );
}