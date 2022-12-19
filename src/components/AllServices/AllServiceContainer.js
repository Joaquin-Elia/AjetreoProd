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
        products.map(({id, img, title, description, price}) => (
          <AllServiceItem 
            key={id}
            id={id}
            img={img}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </div>
  )
}

export default AllService