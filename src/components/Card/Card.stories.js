import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

export const defaultCard = () =>
  Card('FirstName LastName', 'https://source.unsplash.com/random/500x500')
