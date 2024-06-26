'use client'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React, { useEffect } from 'react'

import '@/components/features/mineral/css/embla.css'

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 3000 })])

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
  }, [emblaApi])

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((image, index) => (
            <div className='embla__slide' key={index}>
              <Image
                src={image}
                alt=''
                className='h-full'
                style={{
                  objectFit: 'cover',
                  filter: 'brightness(0.8)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
