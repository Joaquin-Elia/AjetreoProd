import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const AllBeats = ({data}) => {
    const [limit, setLimit] = useState(2);
    const [increment] = useState(2);
    const [initialData, setInitialData] = useState([]);
    const observer = useRef();
    
    const lastElementRef = (node) => {
        if (observer.current) {
          observer.current.disconnect();
        }
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setLimit((prevLimit) => prevLimit + increment);
          }
        });
        if (node) {
          observer.current.observe(node);
        }
      };

      useEffect(() => {
        setInitialData(data.slice(0, limit));
      }, [data, limit]);

  return (
    <>
        {initialData.map(({id, img, title, price}, i) => {
            if (initialData.length === i + 1) {
                return (
                    <div
                        className="beats-container"
                        key={i}
                        ref={lastElementRef}
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
                )}
                return (
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
                )
        })}
    </>
  )
}
