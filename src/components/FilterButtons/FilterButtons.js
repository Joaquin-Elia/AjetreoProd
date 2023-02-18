import { useEffect, useState } from 'react'
import { useBeats } from '../../hooks/useBeats';
import './FilterButtons.css'

export const FilterButtons = ({filterResult}) => {
  const [beatsCategories] = useState(['Todo', 'Trap', 'Rap', 'Boombap'])
  
  return (
    <div>
        <div className="btns-categories">
              <button 
                  type='button'
                  className='category-btn'
                  onClick={() => filterResult()}
              >Todo</button>
              <button 
                  type='button'
                  className='category-btn'
                  onClick={() => filterResult('Trap')}
              >Trap</button>
              <button 
                  type='button'
                  className='category-btn'
                  onClick={() => filterResult('Rap')}
              >Rap</button>
              <button 
                  type='button'
                  className='category-btn'
                  onClick={() => filterResult('Boombap')}
              >Boombap</button>
        </div>
    </div>
  )
}
