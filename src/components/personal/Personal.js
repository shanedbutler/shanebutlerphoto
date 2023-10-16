import { Gallery } from "../gallery/Gallery";

export const Personal = ({ supabase }) => {
    return (
        <Gallery storagePath={"personal"} supabase={supabase} />
    )
};
