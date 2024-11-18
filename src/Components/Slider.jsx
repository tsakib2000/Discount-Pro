import slide1 from '../assets/markus-spiske-WIpNUhklTQg-unsplash.jpg'
import slide2 from '../assets/chuttersnap-I6bic_J8YYw-unsplash.jpg'
import slide3 from '../assets/tamanna-rumee-lpGm415q9JA-unsplash.jpg'
import slide4 from '../assets/jon-cellier-RUsVVa57VPI-unsplash.jpg'
const Slider = () => {
    return (
      <>
      <div className="carousel w-full rounded-3xl h-96">
  <div id="slide1" className="carousel-item relative w-full  ">
    <img
      src={slide1}
      className="w-full h-full object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={slide2}
      className="w-full h-full object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={slide3}
      className="w-full h-full object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={slide4}
      className="w-full h-full object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      </>

    );
};

export default Slider;