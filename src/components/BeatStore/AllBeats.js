import { Link } from "react-router-dom";
import { useEffect } from "react";

export const AllBeats = ({data}) => {

    useEffect(() => {
        const onLoad = () => {
          window.scrollTo({top: 0})
        }
    
        window.addEventListener("load", onLoad);
    
        return () => {
          window.removeEventListener("load", onLoad);
        }
      }, []);
  return (
    <>
        {data.map(({id, img, title, price}, i) => (
                <div
                    className="beats-container"
                    key={i}
                >
                    <Link to={`/detail/${id}`}>
                        <div>
                            <img 
                                className='img-beat'
                                src={img} 
                                alt={title}
                            />
                            <div className='beat-info'>
                                <h5 className='beat-info-title'>{title}</h5>
                                <span className='beat-info-price'>
                                    $USD {price}
                                </span>
                            </div>
                        </div>
                        <div className="container-add-cart">
                            <button className='add-beat-cart' >
                                Ver más
                            </button>
                        </div>
                    </Link>
                </div>
            ))
        }
    </>
  )
}
