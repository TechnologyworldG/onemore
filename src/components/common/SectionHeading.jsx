export default function SectionHeading({ title, description, light = false, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2
        className={`font-heading font-medium text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight ${
          light ? 'text-cream' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? 'text-cream/70' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
