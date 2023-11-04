import { Card } from './components/card'
import './App.css'
import { SearchBar } from './components/searchbar'

function App() {
  
  return (
    <div className = "App">
      <div className='Search-bar-container'>
        <SearchBar />
        <div> SearchResults</div>
      </div>
        <Card
          imgSrc="https://images.ygoprodeck.com/images/cards_cropped/50371210.jpg"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
    </div>
  )
}

export default App
