import React, { useState } from 'react';

interface Review {
  id: number;
  name: string;
  review: string;
}

const REVIEWS: Review[] = [
  {
    id: 6,
    name: 'Alice',
    review: `Absolutely mind-blowing! From graphics to gameplay, it's a virtual masterpiece. I lost track of time in the immersive experience.`,
  },
  {
    id: 0,
    name: 'Bob',
    review: `A hidden gem for tech enthusiasts. The selection is vast, and the ease of discovering new tech is addictively delightful!`,
  },
  {
    id: 2,
    name: 'Charlie',
    review: `Results speak louder than words. I've never seen progress like this. Kudos!`,
  },
  {
    id: 3,
    name: 'Diana',
    review: `It's very easy to customize and categorize lists for new projects/task categories.`,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'prev'
        ? (REVIEWS.length + currentIndex - 1) % REVIEWS.length
        : (currentIndex + 1) % REVIEWS.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="bg-gradient-to-tr from-slate-200 to-slate-50 text-slate-800 flex flex-col justify-center items-center min-h-screen relative px-4">
      <main className="bg-white my-4 w-full max-w-2xl rounded-3xl text-center p-8 sm:p-16">
        <h1 className="text-2xl font-bold">Opinie o Volume Effect</h1>
        <p className="text-md">Zobacz co sądzą o nas nasi klienci!</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-[60px_auto_60px] gap-2 sm:gap-6 items-center">
          {/* Previous Button */}
          <button onClick={() => handleSlideChange('prev')} className="rounded-full w-10 h-10 bg-black text-white text-2xl flex items-center justify-center hover:bg-gray-800 transition">
            &#8592;
          </button>

          {/* Slider */}
          <div className="relative w-full overflow-hidden h-auto px-6">
            <div className="flex gap-6 transition-transform duration-700" style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem))` }}>

                {REVIEWS.map((review) => (
                    <div key={review.id} className="flex-shrink-0 w-full flex flex-col items-center" style={{ width: '100%' }}>
                        <blockquote className="bg-black text-white rounded-md p-6 text-sm relative isolate">
                            <p>{review.review}</p>
                            <div className="absolute bg-black w-4 h-4 rotate-45 -bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-full"
                            ></div>
                        </blockquote>
                        <div className="details text-sm flex flex-col items-center gap-2 mt-6">
                            <div>
                                <p className="text-sm font-bold">{review.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Next Button */}
          <button onClick={() => handleSlideChange('next')} className="rounded-full w-10 h-10 bg-black text-white text-2xl flex items-center justify-center hover:bg-gray-800 transition">
            &#8594;
          </button>
        </div>
      </main>

      <p className='text-[9px] text-zinc-800 w-[500px] text-center'>Wszystkie opinie zamieszczone na tej stronie pochodzą z publicznie dostępnych informacji zawartych na profilu firmy w Google. <a href="https://g.page/r/CRV6L_J1Dhy6EAE/review" className='text-blue-800 underline' target='_blank'>Kliknij tutaj, aby zobaczyć pełną listę opinii.</a></p>
    </section>
  );
};

export default Testimonials;
