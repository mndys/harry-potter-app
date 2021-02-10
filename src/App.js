import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'
import Card from './components/Card'
import createElement from './lib/createElement'
import PicGrid from './components/PicGrid'

export default function App() {
  const header = AppHeader(`Aloh <i class="fas fa-unlock-alt"></i> mora`)
  document.body.append(header)

  getCharacters()
    .then(characters => createCards(characters))
    .catch(error => handleGetCharacterError(error))

  function createCards(characters) {
    const cards = characters.map(character =>
      Card(character.name, character.image)
    )
    document.body.append(PicGrid(...cards))
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
