import PageTransition from '../components/common/PageTransition'
import JoinWizard from '../components/JoinWizard'

export default function Join() {
  return (
    <PageTransition>
      <section className="bg-cream pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <h1 className="font-heading font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-forest">Add your voice.</h1>
          </div>
          <JoinWizard />
        </div>
      </section>
    </PageTransition>
  )
}
