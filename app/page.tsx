import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Technologies } from '@/components/technologies'
import { Portfolio } from '@/components/portfolio'
import { Industries } from '@/components/industries'
import { Stats } from '@/components/stats'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { CtaBanner } from '@/components/cta-banner'
import { Footer } from '@/components/footer'
import { NextSectionWrapper } from '@/components/next-section-wrapper'

export default function Page() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#071426]">
      <Navbar />
      <main>
        {/* The Hero is now pinned outside the normal document flow by GSAP */}
        <Hero />
        
        {/* The rest of the page sits inside the Wrapper which natively scrolls up over the Hero */}
        <NextSectionWrapper>
          <About />
          <WhyChooseUs />
          <Services />
          <Process />
          <Technologies />
          <Portfolio />
          <Industries />
          <Stats />
          <Testimonials />
          <Pricing />
          <Faq />
          <Contact />
          <CtaBanner />
          <Footer />
        </NextSectionWrapper>
      </main>
    </div>
  )
}
