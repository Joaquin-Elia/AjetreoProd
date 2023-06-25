import AllServiceItem from './AllServiceItem';
import { useFirestore } from '../../hooks/useFirestore';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { useSEO } from '../../hooks/useSEO';
import './AllService.css'

const AllService = () => {
  const [dataServices, loading] = useFirestore();

  const title = loading 
    ? 'Cargando...' 
    : dataServices ? 'Services' : ''
  useSEO({title, description: 'Services'})
  
  return (
    <div className='all_services_bg'>
      {loading ? 
        <div className='all_services_cards_loading'>
          <LoadingAnimation />
        </div> 
          : 
        dataServices.map(({id, img, title, description, price}) => (
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