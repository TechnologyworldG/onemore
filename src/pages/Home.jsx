import PageTransition from '../components/common/PageTransition'
import Hero from '../components/home/Hero'
import WhySection from '../components/home/WhySection'
import WhatWeDo from '../components/home/WhatWeDo'
import ImpactSection from '../components/home/ImpactSection'
import FindYourPlace from '../components/FindYourPlace'
import OpportunitiesPreview from '../components/home/OpportunitiesPreview'
import EventsPreview from '../components/home/EventsPreview'
import StoriesPreview from '../components/home/StoriesPreview'
import JoinCta from '../components/home/JoinCta'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <WhySection />
      <WhatWeDo />
      <ImpactSection />
      <FindYourPlace />
      <OpportunitiesPreview />
      <EventsPreview />
      <StoriesPreview />
      <JoinCta />
    </PageTransition>
  )
}
