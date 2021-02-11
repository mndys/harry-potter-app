import createElement from '../../lib/createElement'
import './CardGrid.css'

export default function CardGrid(...children) {
  return createElement(
    'div',
    {
      className: 'CardGrid',
    },
    ...children
  )
}
