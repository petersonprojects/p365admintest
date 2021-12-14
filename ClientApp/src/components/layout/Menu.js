/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import React, {useEffect, useState} from "react";
// import {CSSTransition} from 'react-transition-group';
import './Menu.css';

// fluent icons
// import { 
//   Home24Regular,
//   PersonNote24Regular,
//   BookSearch24Regular,
//   ContactCardGroup24Regular,
//   Settings24Regular
// } 
// from "@fluentui/react-icons";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

const Menu = (props) => {

  const history = useHistory();
  const location = useLocation();
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [navData, setNavData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(()=> {

    
    async function getNavigation(){

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://p365services.azurewebsites.net/api/GetNavigation?code=7o3GL2bEFo3v/EcDP67ov1NFBd720S2pn5x4x8u3Wcgg1hxIZKaz2g==&lcid=1033", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setNavData(result);
            setIsFetched(true);
        })
        .catch(error => console.log('error', error));

    }

    getNavigation();

  }, [])

  return (
    <React.Fragment>
      <div
        className={`segoe14pt fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 border-r-2 lg:translate-x-0 lg:static lg:inset-0`}
      >
        {isFetched && navData.map((item) => {

          // for each item we need to check for children and dynamically build the 
          // subNav
          let subNav = [];
          // make sure children isn't empty
          if(item.children.length > 0)
          {

            for(let childObj of item.children)
            {
              // for each child object contained within the children[] array
              // let's build a subNav array
              subNav.push({
                title: childObj.displayName,
                itemId: `/${item.displayName}/${childObj.displayName}`,
                elemBefore: () => <i className={`ms-Icon ms-Icon--${childObj.iconName}`} aria-hidden="true"></i>,
              })
            }

          }

            return(

              <>
              <Navigation
                key={item.id}
                activeItemId={location.pathname}
                onSelect={(obj) => {
                  history.push(obj.itemId)
                }}
                items={[
                  {
                    title: item.displayName,
                    itemId: `/${item.displayName}`,
                    elemBefore: () => <i className={`ms-Icon ms-Icon--${item.iconName}`} aria-hidden="true"></i>,
                    subNav: subNav
                  }
                ]}
                
              />
              </>
            );


        }) /* end of map */}

      </div> {/* end of wrapper div */}
    </React.Fragment>
  );
};

export default Menu;