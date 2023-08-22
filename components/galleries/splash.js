'use client'
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Swiper from 'swiper';
import 'swiper/css';

const Splash = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            autoHeight: true,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            keyboard: {
                enabled: true,
            },
        });
    }, []);

    return (
        !isClient ?
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <Image
                            src="https://res.cloudinary.com/dgxomkis0/image/upload/v1692650025/stizer_spuria_web_r_12_t4rhqe.jpg"
                            width={1200}
                            height={800}
                            alt="Interior architectural photo"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Image
                            src="https://res.cloudinary.com/dgxomkis0/image/upload/v1692654966/shane_butler_architectural_1_b5ihoe.jpg"
                            width={1200}
                            height={800}
                            alt="Interior architectural photo"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Image
                            src="https://res.cloudinary.com/dgxomkis0/image/upload/v1692654966/shane-butler-exterior-1_pcopve.jpg"
                            width={1200}
                            height={800}
                            alt="Exterior architectural photo"
                        />
                    </div>
                </div>
            </div>
            :
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <Image
                            src="https://res.cloudinary.com/dgxomkis0/image/upload/v1692650025/stizer_spuria_web_r_12_t4rhqe.jpg"
                            width={1200}
                            height={800}
                            alt="Interior architectural photo"
                        />
                    </div>
                </div>
            </div>
    );
};

export default Splash;