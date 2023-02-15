import { useState } from 'react'
import './FilterButtons.css'

export const FilterButtons = () => {

  const [beatsCategories] = useState(['Trap', 'Boombap', 'Drill'])
  return (
    <div>
        <div className="btns-categories">
            {beatsCategories.map((category, i) => 
            <div key={i}>
              <button 
                  type='button'
                  className='category-btn'
              >
                  {category}
              </button>
            </div>
            )}
        </div>
    </div>
  )
}
