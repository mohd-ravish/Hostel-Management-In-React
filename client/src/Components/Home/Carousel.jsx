import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Images/carousel/img1.png'
import img2 from '../Images/carousel/img2.png'
import img3 from '../Images/carousel/img3.png'
import img4 from '../Images/carousel/img4.png'
import img5 from '../Images/carousel/img5.png'
import img6 from '../Images/carousel/img6.png'
import img7 from '../Images/carousel/img7.png'
import img8 from '../Images/carousel/img8.png'
import img9 from '../Images/carousel/img9.png'

const Collage = () => {
  return (
    <div>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src={img4}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src={img5}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src={img6}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src={img7}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src={img8}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src={img9}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Collage
