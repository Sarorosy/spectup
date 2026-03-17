import Hero from '../components/Hero'
import LogoMarquee from '../components/LogoMarquee'
import LeadSection from '../components/LeadSection'
import WhoIsItFor from '../components/WhoIsItFor'
import OurServices from '../components/OurServices'
import FundraisingCategories from '../components/FundraisingCategories'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import CapitalAdvisoryNetwork from '../components/CapitalAdvisoryNetwork'
import NextRaise from '../components/NextRaise'
import Footer from '../components/Footer'

function Two() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen neon-dashboard">


      {/* Screen Edge Neon Glow Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[100] shadow-[inset_0_0_120px_rgba(170,255,0,0.1)] mix-blend-screen" />

      {/* 
        The frame: Vertical Borders and Horizontal Green Line 
      */}
      <div className="pointer-events-none fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] z-[60] border-x border-[#]/20 shadow-[0_0_30px_rgba(170,255,0,0.1)]" />

      <main className="relative w-full z-10">
        <Hero />
        <LogoMarquee />
        <LeadSection />
        <WhoIsItFor />
        <OurServices />
        <FundraisingCategories />
        <Projects />
        <Testimonials />
        <WhyChooseUs />
        <CapitalAdvisoryNetwork />
        <NextRaise />
        <Footer />
      </main>
    </div>
  )
}

export default Two
