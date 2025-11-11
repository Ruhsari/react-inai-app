import React from 'react'
import photo_1 from '../img/blok_1_1.jpg'
import photo_2 from '../img/blok_1_2.jpg'

export default function Greetings() {
  return (
    <div className='greetings'>
        <div className='photo-stack-2'>
            <img src={photo_1} alt="photo_1" className="photo_1"></img>
            <img src={photo_2} alt="photo_2" className="photo_2"></img>
        </div>

    <div className='text-greetings'>
            <h3>О нашем институте</h3>
            <h1>Знакомство с нашим Институтом</h1>
            <p>Кыргызско-Германский институт прикладной информатики (КГИПИ) – единственный вуз в образовательном секторе Кыргызстана, специализирующийся в области компьютерных наук.
            </p>
            <button>Больше о  нас</button>
          </div>
        </div>
  )
}
