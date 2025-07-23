import React, { useState } from 'react';

export function Carousel({ children }: { children: React.ReactNode[] }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + children.length) % children.length);
  const next = () => setIndex((index + 1) % children.length);

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
        {children.map((child, i) => (
          <div key={i} className="min-w-full px-4">
            {child}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button onClick={prev} className="text-sm px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">Prev</button>
        <button onClick={next} className="text-sm px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">Next</button>
      </div>
    </div>
  );
}

export function CarouselItem({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
