import Gallery from "../gallery/gallery";

const Home = () => {

    const images = [
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693425391/home/shane_butler_photography_home_2_tvisg4.jpg",
            alt: "Modern Residential Interior Living Room"
        },
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693425392/home/shane_butler_photography_home_1_hohcis.jpg",
            alt: "Contemporary Residential Interior Kitchen"
        },
    ];

    const params = {
        autoplay: true,
        keyboard: true,
        loop: true,
        spaceBetween: 25,
        speed: 500,
        autoHeight: true,
    };
    
    return (
        <Gallery images={images} params={params} />
    );
}

export default Home;
