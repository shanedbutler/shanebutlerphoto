import { Gallery } from "../gallery/Gallery";

export const Interiors = () => {

    const images = [
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693434630/interiors/shane_butler_photography_interiors_3_mvrqfc.jpg",
            alt: "Modern Contemporary Residential Interior Living Room"
        },
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693434630/interiors/shane_butler_photography_interiors_2_xb22fj.jpg",
            alt: "Modern Residential Interior Entry"
        },
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693434630/interiors/shane_butler_photography_interiors_1_lqacdf.jpg",
            alt: "Modern Contemporary Residential Interior Kitchen"
        }
    ];
    
    return (
        <Gallery images={images} />
    )
}
