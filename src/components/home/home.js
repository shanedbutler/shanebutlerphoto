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
    
    return (
        <swiper-container 
        autoplay='true'
        keyboard='true'
        loop='true'
        space-between='25'
        speed='500'
        auto-height='true'
        >
            {images.map((image, i) => (
                <swiper-slide key={i}>
                    <img src={image.url} alt={`Shane Butler - ${image.alt}`} />
                </swiper-slide>
            ))}
        </swiper-container>
    );
}

export default Home;
