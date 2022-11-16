import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import AllServiceItem from './AllServiceItem';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import './AllService.css'

const AllService = () => {
  const value = useContext(CartContext)
  const [products] = value.products
  const loading = value.loading;

  return (
    <div className='all_services_bg'>
      {loading ? 
        <div className='all_services_cards_loading'>
          <LoadingAnimation />
        </div> 
          : 
        products.map((product) => (
          <AllServiceItem 
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
  )
}

export default AllService