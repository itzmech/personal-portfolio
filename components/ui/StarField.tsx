"use client";

import { useEffect, useState } from "react";

type Star = {
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

type Shooter = {
  top: number;
  left: number;
  delay: number;
  duration: number;
};

/**
 * Decorative night-sky overlay for the hero: a field of randomly
 * twinkling stars plus a few occasional shooting stars. Positions are
 * generated client-side after mount (avoids SSR hydration mismatches).
 * Purely decorative; prefers-reduced-motion disables all animation via
 * the global CSS rule.
 */
export default function StarField() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shooters, setShooters] = useState<Shooter[]>([]);

  useEffect(() => {
    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    setStars(
      Array.from({ length: 70 }, () => ({
        top: rand(0, 55),
        left: rand(0, 100),
        size: rand(1, 2.5),
        delay: rand(0, 4),
        duration: rand(2.2, 5),
      }))
    );

    setShooters(
      Array.from({ length: 3 }, () => ({
        top: rand(4, 32),
        left: rand(5, 65),
        delay: rand(0, 12),
        duration: rand(8, 14),
      }))
    );
  }, []);

  return (
    <div className="star-field" aria-hidden="true">
      {stars.map((star, i) => (
        <span
          key={`star-${i}`}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      {shooters.map((shooter, i) => (
        <span
          key={`shooter-${i}`}
          className="shooting-star"
          style={{
            top: `${shooter.top}%`,
            left: `${shooter.left}%`,
            animationDelay: `${shooter.delay}s`,
            animationDuration: `${shooter.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
