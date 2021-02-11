import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

const person = {
  name: 'Character Name',
  image: 'https://source.unsplash.com/random/500x500',
}

export const defaultCard = () => Card(person)
