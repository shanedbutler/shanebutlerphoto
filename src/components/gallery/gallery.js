import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';


const Gallery = ({ images, params }) => {
    const swiperRef = useRef(null);
    
    useEffect(() => {
      // Register Swiper web component
      register();
    
      // Object with parameters
      const defaultParams = {
        pagination: true,
        keyboard: true,
        loop: true,
        spaceBetween: 25,
        autoHeight: true,
        };
    
      // Assign passed in param or default to swiper element
      let swiperParams = params ? params : defaultParams;
      Object.assign(swiperRef.current, swiperParams);
    
      // Initialize swiper
      swiperRef.current.initialize();
    }, []);

    return (
        <swiper-container init="false" ref={swiperRef}>
            {images.map((image, i) => (
                <swiper-slide key={i}>
                    <img src={image.url} alt={`Shane Butler - ${image.alt}`} />
                </swiper-slide>
            ))}
        </swiper-container>
    );
}

export default Gallery;
