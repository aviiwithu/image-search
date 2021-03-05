import React from 'react'
import './Unsplash.css';
import {Link} from 'react-router-dom';
import Button from './Button';

function UnsplashImage({image, id,largeImage}) {

    return (
            <div  className="content"  >
                   <div className="imgContainer" >
                        <img src={image} alt="pic" /> 
                        {/* <p>image</p> */}

                       <div className="action">

                       {/* Link to={`/view/${id}`}  */}
                            <Link to={{
                                        pathname: "/view",
                                        largeImage
                                    }} >
                                <Button text="View" />
                                {/* <UnsplashView/> */}
                            </Link>

                            <a href={`https://unsplash.com/photos/${id}/download?force=true`}><Button text="Download" /></a>
                        </div>
                   </div>
                   
            </div>
    )
}

export default UnsplashImage