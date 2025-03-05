import Nav from '../components/Nav'
import Hero from '../components/Hero'
import References from '../components/References'
import Cards from './../components/Cards';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
    <header className='pt-8'>
      <Nav/>
      <Hero />
    </header>
    <main>
      <References />
      <Cards />
      <Testimonial/>
    </main>
    <Footer/>
    </>
  )
}

export default HomePage