import SectionHeading from '../common/SectionHeading'
import ImpactCounter from '../ImpactCounter'
import { impactStats } from '../../data/mockData'

export default function ImpactSection() {
  return (
    <section className="bg-forest text-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading title="What thousands of one more looks like." light />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mt-16">
          {impactStats.map((stat) => (
            <ImpactCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
