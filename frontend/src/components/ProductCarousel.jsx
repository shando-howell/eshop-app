import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';

import Loader from './Loader'
import Message from './Message'
import { useGetTopProductsQuery } from '../slices/productsApiSlice'

const ProductCarousel = () => {
  // Get data from redux store 
  const { data: products, isLoading, error } = useGetTopProductsQuery()
  return isLoading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
  : (
    <Carousel fade pause='hover' className='bg-primary mb-4'>
        {products.map(product => (
            <Carousel.Item key={product._id}>
                <Link to={`/product/${product._id}`}>
                    <Image src={product.image} alt={product.name} fluid/>
                    <Carousel.Caption className='carousel-caption'>
                        {/* <Button variant="outline-secondary" style={{color: "white"}} size="lg">Shop Now</Button> */}
                        <h2>{product.name}</h2>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default ProductCarousel