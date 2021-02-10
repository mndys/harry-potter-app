import createElement from '../../lib/createElement'
import './PicGrid.css'

export default function PicGrid(...children) {
  return createElement(
    'div',
    {
      className: 'PicGrid',
    },
    ...children
  )
}
