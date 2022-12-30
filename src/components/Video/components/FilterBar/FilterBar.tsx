import React from 'react';
import "../styles/FilterBar.css"
import { FILTER_BAR_BUTTONS } from './FilterBar.data';
// create filterbar.data.js const FILTER_BAR_BUTTONS = ['All', 'Football'] => map array
function FilterBar() {
    return (
        <div className="FilterBar">
        {FILTER_BAR_BUTTONS.map(({title}, ind) => <button key ={ind}>{title}</button>)}
        </div>
    )
}

export default FilterBar;
