'use client'

import { useState, useEffect } from 'react'

const images = [
  'priya1.jpg',
  'priya2.jpg',
  'priya3.jpg',
  'priya4.jpg',
  'priya5.jpg'
  // Add your actual image paths from the `public` folder
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Slide every 3 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen w-full mt-2 bg-gradient-to-b from-pink-100 via-white to-pink-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-pink-700 mb-6">
        The Most Beautiful Girl in the World
      </h1>

      <div className="w-full max-w-3xl h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-lg relative bg-white">
  {images.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Slide ${index}`}
      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
        index === currentIndex ? 'opacity-100' : 'opacity-0'
      }`}
    />
  ))}
</div>


      <p className="mt-8 text-lg md:text-xl text-gray-700 text-center max-w-2xl">
        A little tribute to someone truly wonderful – full of beauty, grace, and heart.
      </p>
    </div>
  )
}
