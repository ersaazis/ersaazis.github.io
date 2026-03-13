import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Experience from "./components/home/experience"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import Certifications from "./components/home/certifications"
import Achievements from "./components/home/achievements"
import Gallery from "./components/home/gallery"

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Divider />
      <AboutMe />
      <Divider />
      <FeaturedWork />
      <Divider />
      <Experience />
      <Divider />
      <Education />
      <Divider />
      <Certifications />
      <Divider />
      <Achievements />
      <Divider />
      <Gallery />
      <Divider />
    </main>
  )
}

export default page

