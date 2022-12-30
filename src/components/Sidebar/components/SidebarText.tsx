import React from 'react';
import "../styles/SidebarText.css";

function SidebarText({title}:{title : any}){
    return(
        <div className="sidebarText">
            <h4 className="sidebarText_title">{title}</h4>
        </div>
    )
}

export default SidebarText;