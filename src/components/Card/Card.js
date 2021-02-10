import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(name, image) {
  const characterPic = createElement(
    'div',
    { className: 'characterPicContainer' },
    createElement('img', {
      className: 'characterPic',
      src: image,
    })
  )
  const characterName = createElement('span', {
    className: 'characterName',
    innerText: name,
  })

  return createElement(
    'section',
    { className: 'Card' },
    characterPic,
    characterName
  )
}
