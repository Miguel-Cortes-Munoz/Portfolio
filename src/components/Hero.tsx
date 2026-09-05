type HeroProps = {
  onEnter: () => void;
};

export default function Hero({ onEnter }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-midnight text-mist">
      {/* scattered stars instead of blob glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-mist"
            style={{
              // eslint-disable-next-line react-hooks/purity
              top: `${Math.random() * 100}%`,
              // eslint-disable-next-line react-hooks/purity
              left: `${Math.random() * 100}%`,
              // eslint-disable-next-line react-hooks/purity
              width: `${Math.random() * 2 + 1}px`,
              // eslint-disable-next-line react-hooks/purity
              height: `${Math.random() * 2 + 1}px`,
              // eslint-disable-next-line react-hooks/purity
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl px-8 sm:px-16 pt-32">
        <p className="font-body text-sm uppercase tracking-widest text-teal mb-4">
          Software developer
        </p>

        <h1 className="font-heading text-6xl sm:text-8xl font-medium leading-none mb-8">
          Miguel Cortes
          <br />
          Munoz
        </h1>

        <p className="font-body text-base text-lavender/80 max-w-md mb-12">
          I build clean, thoughtful software across web, systems, and data.
        </p>

        <button
          onClick={onEnter}
          className="font-body text-sm text-mist border-b border-teal pb-1 hover:text-teal transition-colors cursor-pointer"
        >
          view my work →
        </button>
      </div>
    </section>
  );
}
