import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'
import Card from './components/Card'
import createElement from './lib/createElement'
import CardGrid from './components/CardGrid'

export default function App() {
  const header = AppHeader(`Aloh <i class="fas fa-unlock-alt"></i> mora`)
  document.body.append(header)

  const people = []

  getCharacters()
    .then(characters => {
      people.push(...characters)
      createCards(people)
    })
    .catch(error => handleGetCharacterError(error))

  function createCards(people) {
    const cards = people.map(person => Card(person))
    document.body.append(CardGrid(...cards))
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    document.body.append(errorMessage)
  }
}
