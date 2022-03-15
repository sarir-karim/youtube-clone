import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
const Sidebar = ({sidebar,handleToggleSidebar}) => {
  return (
    <nav className={sidebar ? "sidebar open" : "sidebar"}
    onClick={()=>handleToggleSidebar(false)}
    >
      <li>
        <MdHome size={23} className="sidebar__icons" />
        <span> Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} className="sidebar__icons" />
        <span> Subscription</span>
      </li>
      <li>
        <MdThumbUp size={23} className="sidebar__icons" />
        <span> Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23} className="sidebar__icons" />
        <span> History</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} className="sidebar__icons" />
        <span> I don't know</span>
      </li>
      <hr />
      <li>
        <MdExitToApp size={23} className="sidebar__icons" />
        <span> Log out</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
