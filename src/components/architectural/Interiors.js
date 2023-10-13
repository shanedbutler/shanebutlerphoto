import { useEffect, useState } from "react";
import { Gallery } from "../gallery/Gallery";
import { getDownloadURLs } from "../../utils/storageUtils";

export const Interiors = ({ storage }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Call the getDownloadURLs function to get the array of image URLs
        getDownloadURLs(storage, 'interiors').then((imageUrls) => {
            setImages(imageUrls);
        }).catch((error) => {
            console.error(error);
        });
    }, [storage]);
    
    return (
        <Gallery images={images} />
    )
}
