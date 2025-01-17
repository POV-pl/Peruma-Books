import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  const images = [
    'src/assests/PRM Logo.jpg', 
    'src/assests/PRM Logo.jpg', 
    'src/assests/PRM Logo.jpg', // Replace with actual image URLs
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 images in the viewport
    slidesToScroll: 1,
    arrows: true,  // Enable arrows to scroll images
    responsive: [
      {
        breakpoint: 1024,  // Adjust for tablets
        settings: {
          slidesToShow: 2,  // Show 2 images on tablets
        },
      },
      {
        breakpoint: 600,  // Adjust for mobile devices
        settings: {
          slidesToShow: 1,  // Show 1 image on mobile
        },
      },
    ],
  };

  return (
    <div id="gallery" className="min-h-screen p-8 bg-white">
      <h2 className="text-4xl font-bold text-black-600 mb-4">Gallery</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2"> {/* Add padding around each image */}
            <img src={img} alt={`Slide ${index}`} className="w-full h-auto rounded-md shadow-md" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
