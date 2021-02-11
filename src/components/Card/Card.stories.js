import Card from './Card'
import person from '../../App'

export default {
  title: 'Card',
  component: Card,
}

export const defaultCard = () => Card(person)
