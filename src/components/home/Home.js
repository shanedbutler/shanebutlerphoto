import { useEffect, useState } from "react";
import { Gallery } from "../gallery/Gallery";
import { getDownloadURLs } from "../../utils/storageUtils";

export const Home = ({ storage }) => {
    const params = {
        autoplay: true,
        keyboard: true,
        loop: true,
        spaceBetween: 25,
        autoHeight: true,
    };

    return (
        <Gallery storagePath="home" storage={storage} params={params} />
    );
}
