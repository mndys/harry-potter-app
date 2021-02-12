import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(person) {
  const { name, image, house } = person

  const houseColors = {
    Gryffindor: 'var(--color-gryff)',
    Hufflepuff: 'var(--color-huff)',
    Ravenclaw: 'var(--color-rave)',
    Slytherin: 'var(--color-slyth)',
    '': '#0000',
  }

  function getHouseColor(house) {
    return houseColors[house]
  }

  const cardImage = createElement(
    'div',
    {
      className: 'Card__image__container',
      style: `background: ${getHouseColor(house)}`,
    },
    createElement('img', {
      className: 'Card__image',
      src: image,
      alt: '',
    })
  )

  const cardName = createElement('h2', {
    className: 'Card__name',
    innerText: name,
  })

  return createElement('section', { className: 'Card' }, cardImage, cardName)
}
