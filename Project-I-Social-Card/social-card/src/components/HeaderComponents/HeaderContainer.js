import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';


function HeaderContainer() {
  return (
    <div className="header-wrapper">
    <div className="logo">
      <ImageThumbnail />
      </div>
      <div className="header-wrapper2">
        <HeaderTitle />
        <HeaderContent />
      </div>


    </div>


  );


}

export default HeaderContainer;
