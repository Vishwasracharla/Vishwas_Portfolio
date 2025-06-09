import dynamic from 'next/dynamic'

// Dynamically import client components
const Hero = dynamic(() => import('./components/Hero'), { ssr: false })
const BlobAnimation = dynamic(() => import('./components/BlobAnimation'), { ssr: false })
// Uncommenting other sections
const About = dynamic(() => import('./components/About'), { ssr: false })
const Experience = dynamic(() => import('./components/Experience'), { ssr: false })
const Projects = dynamic(() => import('./components/Projects'), { ssr: false })
const Contact = dynamic(() => import('./components/Contact'), { ssr: false })
const SkillsAndTools = dynamic(() => import('./components/SkillsAndTools'), { ssr: false })
const SocialLinks = dynamic(() => import('./components/SocialLinks'), { ssr: false })

// Removed Navbar import
// import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BlobAnimation />
      {/* Removed Navbar component */}
      {/* <Navbar /> */}
      {/* Hero section remains full width */}
      <Hero />
      {/* Uncommenting container div for other sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Uncommenting other sections */}
        <About />
        <SkillsAndTools />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <SocialLinks />
    </main>
  )
} 