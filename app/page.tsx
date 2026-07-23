import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustedBy } from '@/components/trusted-by'
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

export default function Page() {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
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
      </main>
      <Footer />
    </div>
  )
}
