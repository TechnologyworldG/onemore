import PageTransition from '../components/common/PageTransition'
import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-[70vh] flex items-center justify-center bg-cream">
        <div className="text-center px-6">
          <p className="font-heading text-8xl md:text-9xl text-forest/10">404</p>
          <h1 className="mt-4 font-heading text-3xl md:text-4xl text-forest">This page wandered off.</h1>
          <p className="mt-3 text-muted">Let's get you back to the movement.</p>
          <div className="mt-8">
            <Button to="/" variant="primary">
              Back to home
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
