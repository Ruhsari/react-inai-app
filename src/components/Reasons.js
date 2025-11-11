import React from 'react'
import { ways } from '../data'
import Reason from './Reason'

export default function Reasons() {
  return (
    <div className="reasons-section">
      {/* Заголовок + текст на одной линии */}
      <div className="reasons-header">
        <h1>Причины выбрать INAI</h1>
        <p>Миссией Института является расширение границ IT-образования в Кыргызской Республике за счет внедрения инновационных образовательных программ германских вузов.</p>
      </div>

      {/* 3 карточки */}
      <div className="reasons-cards">
        <Reason title={ways[0].title} description={ways[0].description} />
        <Reason title={ways[1].title} description={ways[1].description} />
        <Reason title={ways[2].title} description={ways[2].description} />
      </div>
    </div>
  )
}