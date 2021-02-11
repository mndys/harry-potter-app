import Card from '../Card/Card'
import CardGrid from './CardGrid'

export default {
  title: 'CardGrid',
  component: CardGrid,
}

const exampleChildren = [
  Card('Character Name', 'https://source.unsplash.com/random/500x500'),
  Card('Character Name', 'https://source.unsplash.com/random/500x500'),
  Card('Character Name', 'https://source.unsplash.com/random/500x500'),
  Card('Character Name', 'https://source.unsplash.com/random/500x500'),
  Card('Character Name', 'https://source.unsplash.com/random/500x500'),
]

export const defaultCardGrid = () => CardGrid(...exampleChildren)
