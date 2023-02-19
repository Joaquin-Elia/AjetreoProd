import './FilterButtons.css'

export const FilterButtons = ({filterResult, allCategories}) => {

  return (
    <>
        <div className="btns-categories">
            {allCategories.map(category => 
                <button 
                    key={category}
                    onClick={() => filterResult(category)}
                    className='category-btn'
                >
                    {category}
                </button>
            )}
        </div>
    </>
  )
}
