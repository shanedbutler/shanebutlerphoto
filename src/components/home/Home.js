import { useEffect, useState } from "react";
import { Gallery } from "../gallery/Gallery";
import { getDownloadURLs } from "../../utils/storageUtils";

export const Home = ({ storage }) => {
    const [images, setImages] = useState([]);

    const params = {
        autoplay: true,
        keyboard: true,
        loop: true,
        spaceBetween: 25,
        autoHeight: true,
    };

    useEffect(() => {
        // Call the getDownloadURLs function to get the array of image URLs
        getDownloadURLs(storage, 'home').then((imageUrls) => {
            // Use the array of image URLs as needed
            setImages(imageUrls);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <Gallery images={images} params={params} />
    );
}
