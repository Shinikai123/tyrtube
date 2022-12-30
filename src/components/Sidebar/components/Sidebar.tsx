import React from 'react';
import '../styles/Sidebar.css';
import SidebarRow from './SidebarRow';
import {SIDEBAR_ROW_BUTTONS_FIRST_SECTION} from "../data/Sidebar.data";
import {SIDEBAR_ROW_BUTTONS_SECOND_SECTION} from "../data/Sidebar.data";
import {SIDEBAR_ROW_BUTTONS_THIRD_SECTION} from "../data/Sidebar.data";
import {SIDEBAR_ROW_BUTTONS_FOURTH_SECTION} from "../data/Sidebar.data";
import {SIDEBAR_TEXT_FIRST_SECTION} from '../data/Sidebar.data';
import {SIDEBAR_TEXT_SECOND_SECTION} from '../data/Sidebar.data';
import SidebarText from "./SidebarText";

function Sidebar() {
    return (
        <div className="sidebar">
            
        {SIDEBAR_ROW_BUTTONS_FIRST_SECTION.map(({icon, title}, ind) => <button key={ind}><SidebarRow Icon={icon} title={title} selected={undefined} /></button>)}
        <hr></hr>
        {SIDEBAR_ROW_BUTTONS_SECOND_SECTION.map(({icon, title}, ind) => <button key={ind}><SidebarRow Icon={icon} title={title} selected={undefined} /></button>)}
        <hr></hr>
        {SIDEBAR_ROW_BUTTONS_THIRD_SECTION.map(({icon, title}, ind) => <button key={ind}><SidebarRow Icon={icon} title={title} selected={undefined} /></button>)}
        <hr></hr>
        {SIDEBAR_ROW_BUTTONS_FOURTH_SECTION.map(({icon, title}, ind) => <button key={ind}><SidebarRow Icon={icon} title={title} selected={undefined} /></button>)}
        <hr></hr>
        <div>
            {SIDEBAR_TEXT_FIRST_SECTION.map(({title},ind) => <a key={ind}><SidebarText title={title}/></a>)}
        </div>
        <div>
            {SIDEBAR_TEXT_SECOND_SECTION.map(({title},ind) => <a key={ind}><SidebarText title={title}/></a>)}
        </div>
        <div className='sidebar_copyright'>
        © 2022 Innowise
            </div>
        </div>
    )
}

export default Sidebar;
