import Card from '../Card/Card'
import CardGrid from './CardGrid'

export default {
  title: 'CardGrid',
  component: CardGrid,
}

const person = {
  name: 'Character Name',
  image: 'https://source.unsplash.com/random/500x500',
}

const exampleChildren = [
  Card(person),
  Card(person),
  Card(person),
  Card(person),
  Card(person),
  Card(person),
  Card(person),
  Card(person),
  Card(person),
  Card(person),
  Card(person),
]

export const defaultCardGrid = () => CardGrid(...exampleChildren)
