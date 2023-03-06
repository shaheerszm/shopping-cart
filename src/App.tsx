import { FunctionComponent, ReactElement, useState } from 'react'
//import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'


const App: FunctionComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePage title="homepage"></HomePage>
      <ShopPage title="shop-page" paragraph="lorem ipsum"></ShopPage>
    </div>
  )
}

export default App;