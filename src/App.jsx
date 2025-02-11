import './App.css'

import Nav from './components/Nav'
import Hero from './components/Hero'
import References from './components/References'

function App() {

  return (
    <>
    <header className='pt-8'>
      <Nav/>
      <Hero />
    </header>
    <main>
      <References />
    </main>
    </>
  )
}

export default App
