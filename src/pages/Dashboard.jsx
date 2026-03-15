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

function Dashboard() {
  return (
    <div className="relative w-full overflow-hidden bg-black min-h-screen neon-dashboard">
      {/* Background Neon Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-[#aaff00]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] bg-[#eaff00]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] bg-[#aaff00]/15 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      {/* Screen Edge Neon Glow Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[100] shadow-[inset_0_0_120px_rgba(170,255,0,0.1)] mix-blend-screen" />

      {/* 
        The frame: Vertical Borders and Horizontal Green Line 
      */}
      <div className="pointer-events-none fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] z-[60] border-x border-[#aaff00]/20 shadow-[0_0_30px_rgba(170,255,0,0.1)]" />

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

export default Dashboard
