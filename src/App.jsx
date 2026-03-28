import FloatingParticles from './components/FloatingParticles'
import HeroSection from './components/HeroSection'
import TempleDivider from './components/TempleDivider'
import BlessingsSection from './components/BlessingsSection'
import EventsSection from './components/EventsSection'
import MeetSection from './components/MeetSection'
import GallerySection from './components/GallerySection'
import InfoSection from './components/InfoSection'
import CountdownSection from './components/CountdownSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <FloatingParticles />
      <HeroSection />
      <TempleDivider variant="light" />
      <BlessingsSection />
      <TempleDivider variant="dark" />
      <EventsSection />
      <TempleDivider variant="light" />
      <MeetSection />
      <GallerySection />
      <TempleDivider variant="light" />
      <InfoSection />
      <CountdownSection />
      <Footer />
    </>
  )
}

export default App
