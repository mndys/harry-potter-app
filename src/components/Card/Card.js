import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(name, image) {
  const cardImage = createElement(
    'div',
    { className: 'Card__image__container' },
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
