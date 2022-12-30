import React from 'react';
import '../styles/SidebarRow.css';

function SidebarRow({selected, Icon, title}: {selected: any, Icon : any, title: any}) {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
            <Icon className="sidebar_icon"  />
            <h2 className="sidebar_title">{title}</h2>
        </div>
    )
}

export default SidebarRow;
