import Gallery from "../gallery/Gallery";

const PointOfSale = () => {

    const images = [
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693604880/point%20of%20sale/shane_butler_photography_point_of_sale_1_rkycej.jpg",
            alt: "Point of Sale Series Photograph"
        },
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693604877/point%20of%20sale/shane_butler_photography_point_of_sale_2_qdjlah.jpg",
            alt: "Point of Sale Series Photograph"
        },
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693604874/point%20of%20sale/shane_butler_photography_point_of_sale_3_oyjlg1.jpg",
            alt: "Point of Sale Series Photograph"
        },
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693604869/point%20of%20sale/shane_butler_photography_point_of_sale_4_so5dkh.jpg",
            alt: "Point of Sale Series Photograph"
        },
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693604866/point%20of%20sale/shane_butler_photography_point_of_sale_5_mheacl.jpg",
            alt: "Point of Sale Series Photograph"
        },
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693604863/point%20of%20sale/shane_butler_photography_point_of_sale_6_liotcn.jpg",
            alt: "Point of Sale Series Photograph"
        },
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693604861/point%20of%20sale/shane_butler_photography_point_of_sale_7_w8gb0p.jpg",
            alt: "Point of Sale Series Photograph"
        },
        {
            url: "https://res.cloudinary.com/dgxomkis0/image/upload/v1693604858/point%20of%20sale/shane_butler_photography_point_of_sale_8_lb0qfp.jpg",
            alt: "Point of Sale Series Photograph"
        },
    ];
    
    return (
        <Gallery images={images} />
    )
}

export default PointOfSale;
