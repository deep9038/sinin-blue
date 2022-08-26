import React from 'react'
import FilterListToggle from '../filterlisttoggal'
import { categoryList, colorList} from '../constant/index'
import '../filterlisttoggal/style.css'
const SidPanel = ({selectedCategory,selectToggal,selectedColor,selectColor}) => {
  return (
    <div>
     {/* color */}
     <div className="input-group">
        <p className='label'>Category</p>
        <FilterListToggle options={categoryList} value={selectedCategory} selectToggal={selectToggal}/>
     </div>
     {/* price */}
     {/* tages */}
     {/* hight and weigh t */}
     <div className="input-group">
        <p className='label'>color</p>
        <FilterListToggle options={colorList} value={selectedColor} selectToggal={selectColor}/>
     </div>
    </div>
  )
}

export default SidPanel
