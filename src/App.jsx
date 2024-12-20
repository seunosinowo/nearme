import Count from './components/Count'
import Explore from './components/Explore'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import News from './components/News'
import Reviews from './components/Reviews'
import Workflow from './components/Workflow'


function App() {

  return (
    <div>
       <Navbar/>
       <MainContent/>
       <Workflow/>
       <Explore/>
       <Reviews/>
       <Count/>
       <News/>
       <Footer/>
    </div>
  )
}

export default App
