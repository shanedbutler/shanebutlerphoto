import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { register } from 'swiper/element/bundle';

const Gallery = ({ images, params }) => {

    const location = useLocation();
    const swiperRef = useRef(null);

    const prevSlide = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const nextSlide = () => {
        swiperRef.current.swiper.slideNext();
    };
    
    useEffect(() => {
      // Register Swiper web component
      register();
    
      // Object with parameters
      const defaultParams = {
        keyboard: true,
        loop: true,
        spaceBetween: 25,
        };
    
      // Assign passed in param or default to swiper element
      let swiperParams = params ? params : defaultParams;
      Object.assign(swiperRef.current, swiperParams);
    
      // Initialize swiper
      swiperRef.current.initialize();
    }, [params]);

    return (
        <div className='pb-3'>
            <swiper-container init="false" ref={swiperRef} onClick={nextSlide}>
                {images.map((image, i) => (
                    <swiper-slide key={i}>
                        <img src={image.url} alt={`Shane Butler - ${image.alt}`} />
                    </swiper-slide>
                ))}
            </swiper-container>
            {location.pathname !== "/" && (
                <div className="flex justify-center items-center mt-3 text-sm">
                    <span className='mr-1 cursor-pointer' onClick={prevSlide}>
                        Previous
                    </span>
                    /
                    <span className='ml-1 cursor-pointer' onClick={nextSlide}>
                        Next
                    </span>
                </div>
            )}
        </div>
    );
}

export default Gallery;
