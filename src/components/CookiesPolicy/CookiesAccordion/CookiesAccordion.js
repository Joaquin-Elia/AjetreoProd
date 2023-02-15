import { CookiesData } from './CookiesData';
import Accordion from '../../Accordion/Accordion';
import '../../Accordion/Accordion.css'

const CookiesAccordion = () => {

  return (
    <div>
        {CookiesData.map(({id, title, cookieType, description, linkDescription, moreInfo, linkMoreInfo}) => 
            <Accordion
                key={id}
                id={id}
                title={title} 
                cookieType={cookieType}
                description={description}
                linkDescription={linkDescription}
                moreInfo={moreInfo}
                linkMoreInfo={linkMoreInfo}
            /> 
        )}
    </div>
  )
}

export default CookiesAccordion