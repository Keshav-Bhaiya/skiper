import { CardCarousel } from '@/components/ui/card-carousel'
import React from 'react'

const CardCarouselParent = () => {
  const images = [
    { src: '/images/card1.webp', alt: "Card showcase 1" },
    { src: '/images/card2.webp', alt: "Card showcase 2" },
    { src: '/images/card3.webp', alt: "Card showcase 3" },
  ]

  return (
    <div className="w-full bg-white  dark:bg-black">
      
      {/* Minimal Container - Almost Edge to Edge on Mobile */}
      <div className="w-full py-6 sm:py-8 lg:py-12">
        
        

        {/* Carousel Container - Edge to Edge on Mobile */}
        <div className="w-full">
          <CardCarousel images={images} />
        </div>

      

      </div>
    </div>
  )
}

export default CardCarouselParent