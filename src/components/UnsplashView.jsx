import React from 'react';
import './Unsplash.css';

function UnsplashView({location}) {

    // console.log(location.largeImage);
    return (
            <div className="viewImage">
                <img src={location.largeImage} alt="viewPic"/>
            </div>
        )
}

export default UnsplashView