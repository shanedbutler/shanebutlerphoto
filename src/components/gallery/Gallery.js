import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import { getDownloadURLs } from '../../utils/storageUtils';

export const Gallery = ({ storagePath, storage, params }) => {
    const [images, setImages] = useState([]);

    const location = useLocation();
    const swiperRef = useRef(null);

    // Swiper parameters to be used if none are passed in
    const defaultParams = {
        keyboard: true,
        loop: true,
        spaceBetween: 25,
    };

    const prevSlide = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const nextSlide = () => {
        swiperRef.current.swiper.slideNext();
    };

    // Assign passed in param or default to swiper element
    const assignParams = () => {
        let swiperParams = params ? params : defaultParams;
        Object.assign(swiperRef.current, swiperParams);
    };

    useEffect(() => {
        // Call the getDownloadURLs function to get the array of image URLs
        getDownloadURLs(storage, storagePath).then((imageUrls) => {
            setImages(imageUrls);
        }).catch((error) => {
            console.error(error);
        });

        // Register Swiper web component
        register();

        assignParams();

        // Initialize swiper
        swiperRef.current.initialize();
    }, [storagePath, storage]);

    return (
        <div className='pb-3'>
            <swiper-container init="false" ref={swiperRef} onClick={nextSlide}>
                {images.map((image, i) => (
                    <swiper-slide key={i}>
                        <img src={image.url} alt={image.alt} />
                    </swiper-slide>
                ))}
            </swiper-container>
            {location.pathname !== "/" && (
                <div className="flex justify-center items-center mt-3 text-sm">
                    <button className='mr-1' onClick={prevSlide}>
                        Previous
                    </button>
                    /
                    <button className='ml-1' onClick={nextSlide}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
