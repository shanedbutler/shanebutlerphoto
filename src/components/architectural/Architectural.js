import { Gallery } from "../gallery/Gallery";

export const Architectural = ({ supabase }) => {
    return (
        <Gallery storagePath="architectural" supabase={supabase} />
    )
};
