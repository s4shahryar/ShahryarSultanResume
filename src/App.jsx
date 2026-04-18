import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import CoreExpertise from './components/CoreExpertise'
import SelectedCapabilities from './components/SelectedCapabilities'
import ExperienceHighlights from './components/ExperienceHighlights'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <CoreExpertise />
        <SelectedCapabilities />
        <ExperienceHighlights />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
