/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import React from "react";
// import {CSSTransition} from 'react-transition-group';
import './Menu.css';

// fluent icons
import { 
  Home24Regular,
  PersonNote24Regular,
  BookSearch24Regular,
  ContactCardGroup24Regular,
  Settings24Regular
} 
from "@fluentui/react-icons";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

const Menu = () => {

  const history = useHistory();
  const location = useLocation();
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  return (
    <React.Fragment>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0`}
      >

        <Navigation
          activeItemId={location.pathname}
          onSelect={(obj) => {
            history.push(obj.itemId)
          }}
          items={[
            {
              title: "Home",
              itemId: "/",
              // Optional
              elemBefore: () => <Home24Regular/>
            },
            {
              title: "About",
              itemId: "/about",
              elemBefore: () => <PersonNote24Regular />,
              subNav: [
                {
                  title: "Projects",
                  itemId: "/about/projects",
                  // Optional
                  elemBefore: () => <BookSearch24Regular/>
                },
                {
                  title: "Members",
                  itemId: "/about/members",
                  elemBefore: () => <ContactCardGroup24Regular/>
                }
              ]
            },

          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Settings",
                itemId: "/settings",
                elemBefore: () => <Settings24Regular/>
              }
            ]}
            onSelect={({ itemId }) => {
                history.push(itemId);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;