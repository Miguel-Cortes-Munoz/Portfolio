import { useState } from "react";

type HeroProps = {
  onEnter: () => void;
};

export default function Hero({ onEnter }: HeroProps) {
  const [stars] = useState(() =>
    Array.from({ length: 100 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.2,
    }))
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-midnight text-mist">
      {/* scattered stars */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-mist"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
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