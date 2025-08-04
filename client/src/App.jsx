import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import EventsPage from './Components/Events/EventsPage'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
