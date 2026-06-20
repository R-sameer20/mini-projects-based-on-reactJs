import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterkHandler(title){
        setCategory(title)
    }
    return(
        <div className="filter-container" >
            {
                filterData.map((data) => {
                return(
                    <button 
                        key = {data.id}
                        onClick = { () => filterkHandler(data.title)}
                        className={category === data.title ? "active-btn" : ""}
                        >

                        {data.title}
                    </button>
                ) 
            })}
            
        </div>
    )
}

export default Filter;