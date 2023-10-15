import { Gallery } from "../gallery/Gallery";

export const Home = ({ supabase }) => {
    const params = {
        autoplay: true,
        keyboard: true,
        loop: true,
        spaceBetween: 25,
        autoHeight: true,
    };

    return (
        <Gallery storagePath="home" supabase={supabase} params={params} />
    );
}
