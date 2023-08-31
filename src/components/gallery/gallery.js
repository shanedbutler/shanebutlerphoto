const Gallery = ({ images }) => {
    return (
        <swiper-container
        pagination='true'
        keyboard='true'
        loop='true'
        space-between='25'
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

export default Gallery;
