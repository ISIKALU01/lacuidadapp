import React, { useState } from 'react';
import Image from 'next/image';
import Header from './Header';


const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10">
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrevious}
        >
          Previous
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10">
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div className="w-full h-[500px] relative">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="responsive"
          width={2450}
          height={1080}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          // className="w-full h-full"
          // placeholder="blur"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;